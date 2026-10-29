export type WeddingFunction =
  | 'All Looks'
  | 'Traditional Bridal'
  | 'Engagement Glam'
  | 'Reception Dewy'
  | 'Maharashtrian Regal';

export interface LookbookItem {
  id: string;
  title: string;
  category: Exclude<WeddingFunction, 'All Looks'>;
  subtitle: string;
  description: string;
  drapeAndStyle: string;
  keyProducts: string[];
  imageUrl: string;
  aspectRatio: '4/5' | '1/1' | '16/10';
  featured?: boolean;
  signatureLook?: boolean;
}

export interface CurriculumModule {
  moduleNumber: string;
  title: string;
  duration: string;
  focus: string;
  topics: string[];
}

export interface AcademyCourse {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  duration: string;
  format: string;
  seatsTotal: number;
  seatsRemaining: number;
  batchSchedule: {
    month: string;
    dates: string;
    timings: string;
    status: 'Seats Filling Fast' | 'Limited Seats' | 'Waitlist Only';
  }[];
  certification: string;
  highlights: string[];
  modules: CurriculumModule[];
  kitDetails: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: 'Bride' | 'Academy Graduate' | 'Salon Owner Alumna';
  eventOrBatch: string;
  location: string;
  quote: string;
  highlight: string;
  rating: number;
}

export interface BridalInquiryData {
  brideName: string;
  phone: string;
  weddingDate: string;
  functionType: string;
  venueCity: string;
  lookTitle?: string;
  notes?: string;
  dpdpConsent: boolean;
}

export interface AcademyInquiryData {
  studentName: string;
  phone: string;
  courseId: string;
  preferredBatch: string;
  city: string;
  priorExperience: 'Beginner' | 'Practicing Artist' | 'Salon Owner';
  notes?: string;
  dpdpConsent: boolean;
}
