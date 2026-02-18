import { FormlyFieldConfig } from '@ngx-formly/core';

export const CowCreateFields: FormlyFieldConfig[] = [
  {
    key: 'id',
    type: 'number',
    props: {
      label: ' Tag ID',
      required: true,
      placeholder: 'Enter cow Tag ID',
    },
    validation: {
      messages: {
        required: 'Tag ID is required',
      },
    },
  },
  {
    key: 'sex',
    type: 'select',
    props: {
      label: 'Sex',
      required: true,
      options: [
        {
          label: 'Male',
          value: 'Male',
        },
        {
          label: 'Female',
          value: 'Female',
        },
      ],
      placeholder: 'Select cow sex',
    },
    validation: {
      messages: {
        required: 'Sex is required',
      },
    },
  },

  {
    key: 'pen',
    type: 'input',
    props: {
      label: 'Pen',
      required: true,
      placeholder: 'Enter pen location',
    },
    validation: {
      messages: {
        required: 'Pen location is required',
      },
    },
  },
  {
    key: 'status',
    type: 'select',
    props: {
      label: 'Status',
      required: true,
      options: [
        {
          label: 'Active',
          value: 'Active',
        },
        {
          label: 'Treatment',
          value: 'Treatment',
        },
        {
          label: 'Deceased',
          value: 'Deceased',
        },
      ],
      placeholder: 'Select cow status',
    },
    validation: {
      show: true,
      messages: {
        required: 'Status is required',
      },
    },
  },
  {
    key: 'weight',
    type: 'input',
    props: {
      label: 'Weight (kg)',
      type: 'number',
      min: 0,
      placeholder: 'Enter cow weight',
    },
    validation: {
      messages: {
        min: 'Weight must be a positive number',
      },
    },
  },
];
