import { auditDescription, type AuditSubmission } from "./auditOffer";
export async function submitAudit(data: AuditSubmission): Promise<{ ok: boolean; message?: string }> {
  if (new FormData(data.form).get("company_website")) return { ok: true };
  const response = await fetch("https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.name, email: data.email, phone: data.countryCode + data.phone, message: auditDescription(data) + "\nSource: " + window.location.href }), signal: AbortSignal.timeout(20000) });
  const result = await response.json().catch(() => ({}));
  return { ok: response.ok && result.success === true };
}
