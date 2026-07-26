'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface LeadContextValue {
  isOpen: boolean;
  openPopup: (source?: string) => void;
  closePopup: () => void;
  popupSource: string;
}

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [popupSource, setPopupSource] = useState('popup');

  const openPopup = useCallback((source = 'popup') => {
    setPopupSource(source);
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => setIsOpen(false), []);

  return (
    <LeadContext.Provider value={{ isOpen, openPopup, closePopup, popupSource }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLeadPopup() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error('useLeadPopup must be used inside LeadProvider');
  return ctx;
}
