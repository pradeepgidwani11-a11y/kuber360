import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  Timestamp,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { getDb } from './firebase';
import type { ClientMeta } from './clientMeta';

export interface Lead {
  id?: string;
  name: string;
  mobile: string;
  city?: string;
  service?: string;
  message?: string;
  source: string; // 'popup' | 'contact-form' | 'whatsapp-cta'
  status: LeadStatus;
  createdAt: Timestamp;
  meta?: ClientMeta;
}

export type LeadStatus = 'New' | 'Contacted' | 'Interested' | 'Processing' | 'Completed' | 'Closed';

export const LEAD_STATUSES: LeadStatus[] = [
  'New', 'Contacted', 'Interested', 'Processing', 'Completed', 'Closed',
];

const LEADS_COLLECTION = 'leads';

/** Check if this mobile number submitted a lead in the last 24 hours */
export async function hasDuplicateLead(mobile: string): Promise<boolean> {
  try {
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const q = query(
      collection(getDb(), LEADS_COLLECTION),
      where('mobile', '==', mobile),
    );
    const snap = await getDocs(q);
    return snap.docs.some(d => {
      const ts = d.data().createdAt;
      return ts?.toDate() >= since;
    });
  } catch {
    // Rules block client reads — skip duplicate check, allow submission
    return false;
  }
}

/** Submit a new lead to Firestore and optionally ping the Google Apps Script webhook */
export async function submitLead(data: Omit<Lead, 'id' | 'createdAt' | 'status'>): Promise<string> {
  const lead: Omit<Lead, 'id'> = {
    ...data,
    status: 'New',
    createdAt: Timestamp.now(),
  };

  const docRef = await addDoc(collection(getDb(), LEADS_COLLECTION), lead);

  // Fire-and-forget webhook to Google Apps Script (Sheets + email)
  const webhookUrl = process.env.NEXT_PUBLIC_GAS_WEBHOOK_URL;
  if (webhookUrl) {
    fetch('/api/webhook/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: docRef.id, ...lead, createdAt: new Date().toISOString() }),
    }).catch(() => { /* non-critical */ });
  }

  return docRef.id;
}

/** Fetch all leads ordered by createdAt desc (admin use) */
export async function getAllLeads(): Promise<Lead[]> {
  const q = query(collection(getDb(), LEADS_COLLECTION), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Lead));
}

/** Update lead status */
export async function updateLeadStatus(id: string, status: LeadStatus): Promise<void> {
  await updateDoc(doc(getDb(), LEADS_COLLECTION, id), { status });
}
