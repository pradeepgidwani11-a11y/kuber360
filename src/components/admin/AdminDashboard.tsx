'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { getFirebaseAuth } from '@/lib/firebase';
import { getAllLeads, updateLeadStatus, Lead, LEAD_STATUSES, LeadStatus } from '@/lib/leads';

const STATUS_COLORS: Record<LeadStatus, string> = {
  New: '#FF7A00',
  Contacted: '#3B82F6',
  Interested: '#8B5CF6',
  Processing: '#F59E0B',
  Completed: '#10B981',
  Closed: '#6B7280',
};

function formatDate(ts: { seconds: number }) {
  return new Date(ts.seconds * 1000).toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'All'>('All');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [unconfigured, setUnconfigured] = useState(false);

  useEffect(() => {
    let unsub: (() => void) | undefined;
    try {
      unsub = onAuthStateChanged(getFirebaseAuth(), (u) => {
        if (!u) {
          router.replace('/admin/login');
        } else {
          setUser(u);
          loadLeads();
        }
      });
    } catch {
      setUnconfigured(true);
      setLoading(false);
    }
    return () => unsub?.();
  }, [router]);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const data = await getAllLeads();
      setLeads(data);
    } catch {
      // Firebase not configured yet — show empty state
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: LeadStatus) => {
    setUpdatingId(id);
    try {
      await updateLeadStatus(id, status);
      setLeads(ls => ls.map(l => l.id === id ? { ...l, status } : l));
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = leads.filter(l => {
    const matchSearch = !search ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.mobile.includes(search) ||
      (l.city ?? '').toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'All' || l.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const stats = LEAD_STATUSES.map(s => ({
    status: s,
    count: leads.filter(l => l.status === s).length,
  }));

  if (!user) return null;

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-surface)' }}>
      {/* Top bar */}
      <div style={{ background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <div>
            <span className="font-black text-white text-lg tracking-wide">KUBER360</span>
            <span className="ml-2 text-xs font-medium" style={{ color: 'var(--color-orange)' }}>Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs hidden sm:block" style={{ color: 'var(--color-text-dark-muted)' }}>{user.email}</span>
            <button
              onClick={() => signOut(getFirebaseAuth()).then(() => router.push('/admin/login'))}
              className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--color-text-dark-body)' }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
          {stats.map(({ status, count }) => (
            <button
              key={status}
              onClick={() => setFilterStatus(s => s === status ? 'All' : status)}
              className="rounded-xl p-3 text-center transition-shadow hover:shadow-md"
              style={{
                background: filterStatus === status ? STATUS_COLORS[status] : '#fff',
                border: `2px solid ${filterStatus === status ? STATUS_COLORS[status] : 'var(--color-border)'}`,
              }}
            >
              <div
                className="font-black text-2xl"
                style={{ color: filterStatus === status ? '#fff' : STATUS_COLORS[status] }}
              >
                {count}
              </div>
              <div
                className="text-xs font-medium mt-0.5"
                style={{ color: filterStatus === status ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)' }}
              >
                {status}
              </div>
            </button>
          ))}
        </div>

        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <input
            type="text"
            placeholder="Search by name, mobile, city…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 rounded-lg px-4 py-2.5 text-sm outline-none"
            style={{ border: '1px solid var(--color-border)', background: '#fff', color: 'var(--color-text-head)' }}
          />
          <div className="flex items-center gap-2">
            <button
              onClick={loadLeads}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              style={{ background: 'var(--color-navy)', color: '#fff' }}
            >
              Refresh
            </button>
            <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {filtered.length} of {leads.length} leads
            </span>
          </div>
        </div>

        {/* Leads table */}
        {loading ? (
          <div className="text-center py-20" style={{ color: 'var(--color-text-muted)' }}>Loading leads…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-3">📭</div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              {leads.length === 0 ? 'No leads yet. They will appear here once the site is live.' : 'No leads match your filter.'}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map(lead => (
              <div
                key={lead.id}
                className="rounded-xl bg-white p-4"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  {/* Lead info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-bold text-sm" style={{ color: 'var(--color-text-head)' }}>{lead.name}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: `${STATUS_COLORS[lead.status]}20`, color: STATUS_COLORS[lead.status] }}
                      >
                        {lead.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: 'var(--color-text-body)' }}>
                      <a href={`tel:+91${lead.mobile}`} className="font-medium hover:underline" style={{ color: 'var(--color-orange)' }}>
                        📞 +91 {lead.mobile}
                      </a>
                      {lead.city && <span>📍 {lead.city}</span>}
                      {lead.service && <span>💼 {lead.service}</span>}
                      <span>🔗 {lead.source}</span>
                      <span style={{ color: 'var(--color-text-muted)' }}>
                        {lead.createdAt ? formatDate(lead.createdAt as { seconds: number }) : '—'}
                      </span>
                    </div>
                  </div>

                  {/* Status changer */}
                  <select
                    value={lead.status}
                    disabled={updatingId === lead.id}
                    onChange={e => handleStatusChange(lead.id!, e.target.value as LeadStatus)}
                    className="rounded-lg px-3 py-2 text-xs font-semibold outline-none flex-shrink-0"
                    style={{
                      border: `1.5px solid ${STATUS_COLORS[lead.status]}`,
                      color: STATUS_COLORS[lead.status],
                      background: `${STATUS_COLORS[lead.status]}10`,
                    }}
                  >
                    {LEAD_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
