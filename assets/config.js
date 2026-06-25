// ──────────────────────────────────────────────────────────────────────────────
// iRam IT Portal — Central Configuration
// Fill in EVERY value marked ← before going live
// ──────────────────────────────────────────────────────────────────────────────

const IRAM_CONFIG = {

  // ── Submission endpoint ───────────────────────────────────────────────────
  // Routes through Vercel API function (Power Automate URL is stored server-side)
  submitWebhookUrl: '/api/submit-ticket',

  // Flow C (HTTP trigger) — GET tickets for admin panel
  // Returns: { value: [ { id, TicketID, Status, Priority, ... }, ... ] }
  getTicketsUrl:    'PASTE_FLOW_C_GET_TICKETS_URL_HERE',               // ←

  // Flow D (HTTP trigger) — UPDATE a single ticket
  // Body: { id, Status, Priority, AssignedTo, Notes }
  updateTicketUrl:  'PASTE_FLOW_D_UPDATE_TICKET_URL_HERE',             // ←

  // Flow E (HTTP trigger) — SEND REPLY email to submitter
  // Body: { submitterEmail, submitterName, ticketID, replyMessage, agentName }
  sendReplyUrl:     'PASTE_FLOW_E_SEND_REPLY_URL_HERE',                // ←

  // ── WhatsApp ─────────────────────────────────────────────────────────────
  // Your IT support WhatsApp Business number (country code, no + or spaces)
  whatsappNumber:   '27000000000',                                      // ←

  // ── Admin Panel ──────────────────────────────────────────────────────────
  // Simple password for the IT admin panel (change this!)
  adminPassword:    'iRamIT2024!',                                      // ←

  // IT staff who can be assigned to a ticket.
  // `role` groups them (Dev / Ops / Support / etc.) and is shown to the submitter
  // on the public tracking page so they can see who is working on their ticket.
  // The label that appears everywhere is "Name · Role" (e.g. "Sean · Support").
  itStaff: [
    { name: 'Sean',  role: 'Support' },        // ← edit / add real people
    { name: 'Carl',  role: 'Dev' },
    { name: 'Mark',  role: 'Ops' },
    // { name: 'Jane', role: 'Support' },
  ],

  // ── Company Info ─────────────────────────────────────────────────────────
  companyName:      'iRam',
  supportEmail:     'it-support@iram.co.za',                           // ←

};
