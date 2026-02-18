export interface Cow {
  id: number;
  sex: 'Male' | 'Female' | '';
  pen: string;
  status: CowStatus;
  weight?: number;
  lastUpdated: Date;
  events: CowEvent[];
}

export type CowStatus = 'Active' | 'Treatment' | 'Deceased';

export interface CowEvent {
  date: Date;
  type: CowEventType;
  description: string;
}

export type CowEventType =
  | 'Birth'
  | 'Vaccination'
  | 'Illness'
  | 'Treatment'
  | 'Death';
