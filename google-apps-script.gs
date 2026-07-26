/**
 * KUBER360 — Google Apps Script webhook
 * Receives a POST from the Next.js site when a new lead is submitted,
 * appends a row to the active Sheet, and emails the admin.
 *
 * SETUP:
 * 1. Open script.google.com → New project → paste this file
 * 2. Edit ADMIN_EMAIL and SHEET_NAME below
 * 3. Deploy → New deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL → paste into .env.local as NEXT_PUBLIC_GAS_WEBHOOK_URL
 */

const ADMIN_EMAIL = 'info@kuber360.in';
const SHEET_NAME  = 'Leads';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // ── Append row to Sheet ───────────────────────────────────────────────
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let sheet   = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['ID', 'Name', 'Mobile', 'City', 'Service', 'Source', 'Status', 'Submitted At']);
    }

    sheet.appendRow([
      data.id        || '',
      data.name      || '',
      data.mobile    || '',
      data.city      || '',
      data.service   || '',
      data.source    || '',
      data.status    || 'New',
      data.createdAt || new Date().toISOString(),
    ]);

    // ── Send admin email ──────────────────────────────────────────────────
    const subject = `🆕 New Lead: ${data.name || 'Unknown'} — ${data.service || 'General'}`;
    const body = [
      `New lead received on KUBER360:`,
      ``,
      `Name    : ${data.name}`,
      `Mobile  : +91 ${data.mobile}`,
      `City    : ${data.city || '—'}`,
      `Service : ${data.service || '—'}`,
      `Source  : ${data.source}`,
      `Time    : ${data.createdAt}`,
      ``,
      `Open Admin Panel: https://kuber360.in/admin`,
    ].join('\n');

    MailApp.sendEmail(ADMIN_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** Test manually: run this function in the editor */
function testPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        id: 'test-123',
        name: 'Test User',
        mobile: '9876543210',
        city: 'Jaipur',
        service: 'Personal Loan',
        source: 'popup',
        status: 'New',
        createdAt: new Date().toISOString(),
      }),
    },
  };
  Logger.log(doPost(fakeEvent).getContent());
}
