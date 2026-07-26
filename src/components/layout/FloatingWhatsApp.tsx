'use client';

import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '918742019250';
const WA_MESSAGE = encodeURIComponent('Hi! I would like to know more about your financial services.');

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
      style={{ background: 'var(--color-whatsapp)' }}
    >
      <MessageCircle size={26} fill="white" color="white" />
    </a>
  );
}
