'use client';
import { useEffect } from 'react';
import { useLeadPopup } from './LeadContext';

const SESSION_KEY = 'kb_popup_shown';
const DELAY_MS = 10_000; // 10 seconds

export default function LeadAutoTrigger() {
  const { openPopup } = useLeadPopup();

  useEffect(() => {
    // Only auto-open once per session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(SESSION_KEY)) {
        openPopup('auto-10s');
      }
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, [openPopup]);

  return null;
}
