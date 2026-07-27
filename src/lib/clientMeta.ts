export interface ClientMeta {
  ip?: string;
  userAgent?: string;
  browser?: string;
  os?: string;
  device?: string;
  screenRes?: string;
  viewport?: string;
  timezone?: string;
  language?: string;
  referrer?: string;
  pageUrl?: string;
}

function parseBrowser(ua: string): string {
  if (/Edg\//.test(ua)) return 'Edge';
  if (/OPR\/|Opera/.test(ua)) return 'Opera';
  if (/Chrome\//.test(ua)) return 'Chrome';
  if (/Firefox\//.test(ua)) return 'Firefox';
  if (/Safari\//.test(ua) && !/Chrome/.test(ua)) return 'Safari';
  return 'Other';
}

function parseOS(ua: string): string {
  if (/Windows NT 10/.test(ua)) return 'Windows 10/11';
  if (/Windows NT/.test(ua)) return 'Windows';
  if (/Mac OS X/.test(ua)) return 'macOS';
  if (/Android/.test(ua)) return 'Android';
  if (/iPhone|iPad/.test(ua)) return 'iOS';
  if (/Linux/.test(ua)) return 'Linux';
  return 'Other';
}

function parseDevice(ua: string): string {
  if (/Mobile|Android|iPhone/.test(ua)) return 'Mobile';
  if (/iPad|Tablet/.test(ua)) return 'Tablet';
  return 'Desktop';
}

export async function collectClientMeta(): Promise<ClientMeta> {
  const ua = navigator.userAgent;
  const meta: ClientMeta = {
    userAgent: ua,
    browser: parseBrowser(ua),
    os: parseOS(ua),
    device: parseDevice(ua),
    screenRes: `${screen.width}x${screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    referrer: document.referrer || undefined,
    pageUrl: window.location.href,
  };

  try {
    const res = await fetch('/api/client-info');
    if (res.ok) {
      const { ip } = await res.json();
      meta.ip = ip;
    }
  } catch {
    // IP fetch is best-effort
  }

  return meta;
}
