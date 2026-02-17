import { Cow } from '../models/cow.model';

export const cowSeed: Cow[] = [
  {
    id: 1001,
    sex: 'Female',
    pen: 'A1',
    status: 'Active',
    weight: 500,
    lastUpdated: new Date('2024-01-01'),
    events: [
      {
        date: new Date('2024-01-01'),
        type: 'Birth',
        description: 'Born healthy',
      },
    ],
  },
  {
    id: 1002,
    sex: 'Male',
    pen: 'B1',
    status: 'Treatment',
    weight: 600,
    lastUpdated: new Date('2024-02-01'),
    events: [
      {
        date: new Date('2024-02-01'),
        type: 'Illness',
        description: 'Fever and loss of appetite',
      },
      {
        date: new Date('2024-02-05'),
        type: 'Treatment',
        description: 'Administered antibiotics',
      },
    ],
  },
  {
    id: 1003,
    sex: 'Female',
    pen: 'A2',
    status: 'Deceased',
    lastUpdated: new Date('2024-03-01'),
    events: [
      {
        date: new Date('2024-03-01'),
        type: 'Death',
        description: 'Died suddenly, cause unknown',
      },
    ],
  },
];
