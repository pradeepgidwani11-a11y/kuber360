import type { Metadata } from 'next';
import AdminLoginForm from '@/components/admin/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin Login — KUBER360',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'var(--color-navy-dark)' }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="font-black text-2xl text-white tracking-wide">KUBER360</div>
          <div className="text-sm mt-1" style={{ color: 'var(--color-text-dark-muted)' }}>Admin Panel</div>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
}
