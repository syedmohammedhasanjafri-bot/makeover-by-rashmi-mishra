import { BridalInquiryData, AcademyInquiryData } from '@/types';

/**
 * Official Concierge Endpoint for Makeover by Rashmi Mishra
 * Primary Verified Hub: https://wa.link/grbesm
 */
export const OFFICIAL_WA_LINK = 'https://wa.link/grbesm';
export const STUDIO_LOCATION_NAME = 'Kurla, Mumbai';
export const STUDIO_GOOGLE_MAPS_URL = 'https://maps.google.com/?q=Kurla+West+Mumbai+Maharashtra+Makeover+by+Rashmi+Mishra';
export const OFFICIAL_INSTAGRAM_URL = 'https://instagram.com/makeoverbyrashmimishra';
export const OFFICIAL_COMMUNITY_COUNT = '10.1K+';
export const OFFICIAL_EXPERIENCE_YEARS = '5+';

/**
 * Generates an authoritative, beautifully formatted bridal inquiry docket
 */
export function buildBridalWhatsAppUrl(data: BridalInquiryData): string {
  const message = [
    `*MAKEOVER BY RASHMI MISHRA — BRIDAL BOOKING INQUIRY*`,
    `--------------------------------------------------`,
    `• *Bride Name:* ${data.brideName.trim()}`,
    `• *Contact Number:* ${data.phone.trim()}`,
    `• *Wedding / Event Date:* ${data.weddingDate}`,
    `• *Occasion / Function:* ${data.functionType}`,
    `• *Location / Venue:* ${data.venueCity.trim()}`,
    data.lookTitle ? `• *Inquired Look Reference:* ${data.lookTitle}` : null,
    data.notes ? `• *Special Notes / Vision:* ${data.notes.trim()}` : null,
    `--------------------------------------------------`,
    `[DPDP Act 2023 Consent Confirmed: Yes, I agreed to receive bridal schedule & quotation via WhatsApp]`,
    `Requesting official availability verification from Rashmi Mishra studio team.`,
  ]
    .filter(Boolean)
    .join('\n');

  // Direct route to official wa.link
  // For prefilled text, standard WhatsApp API supports text param
  const encodedMessage = encodeURIComponent(message);
  return `${OFFICIAL_WA_LINK}?text=${encodedMessage}`;
}

/**
 * Generates an authoritative academy admissions docket
 */
export function buildAcademyWhatsAppUrl(data: AcademyInquiryData): string {
  const message = [
    `*MAKEOVER BY RASHMI MISHRA — ACADEMY ADMISSIONS 2026*`,
    `--------------------------------------------------`,
    `• *Applicant Name:* ${data.studentName.trim()}`,
    `• *Contact Number:* ${data.phone.trim()}`,
    `• *Course Applied For:* ${data.courseId}`,
    `• *Preferred Batch:* ${data.preferredBatch}`,
    `• *Current Location / City:* ${data.city.trim()}`,
    `• *Experience Level:* ${data.priorExperience}`,
    data.notes ? `• *Questions / Career Goals:* ${data.notes.trim()}` : null,
    `--------------------------------------------------`,
    `[DPDP Act 2023 Consent Confirmed: Yes, I agreed to receive curriculum syllabus & fee structure via WhatsApp]`,
    `Requesting prospectus & seat reservation guidance for the upcoming batch.`,
  ]
    .filter(Boolean)
    .join('\n');

  const encodedMessage = encodeURIComponent(message);
  return `${OFFICIAL_WA_LINK}?text=${encodedMessage}`;
}

/**
 * Generates instant quick inquiry links
 */
export function getQuickInquiryUrl(context: 'bridal' | 'academy' | 'location' | 'general'): string {
  let text = '';
  switch (context) {
    case 'bridal':
      text = 'Hello Rashmi Ma’am, I would like to check bridal makeup availability for my upcoming wedding dates.';
      break;
    case 'academy':
      text = 'Hello Rashmi Ma’am, I would like to receive the 2026 Academy Course Syllabus & Fee Structure for Kurla batches.';
      break;
    case 'location':
      text = 'Hello Studio Team, I would like to schedule a personal studio consultation at your Kurla, Mumbai academy.';
      break;
    default:
      text = 'Hello Rashmi Ma’am, I am reaching out from your official website portfolio regarding bridal & academy services.';
  }
  return `${OFFICIAL_WA_LINK}?text=${encodeURIComponent(text)}`;
}
