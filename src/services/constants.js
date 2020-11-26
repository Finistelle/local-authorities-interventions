export const INTERVENTIONS_TABLE_HEADER = {
  date: 'date',
  name: 'nom',
  description: 'description',
  sender: 'demandeur',
  information: 'coordonnées',
};

export const SORT_STATES = [
  'sort',
  'reverse',
];

export const INTERVENTION_KEYS = {
  createdAt: {
    key: 'created_at',
  },
  name: {
    label: 'Nom'.toUpperCase(),
    key: 'name',
    placeholder: 'Nom',
  },
  description: {
    label: 'Description'.toUpperCase(),
    key: 'description',
    placeholder: 'Saisissez la description de l\'intervention',
  },
  senderName: {
    label: 'Demandeur'.toUpperCase(),
    key: 'sender_name',
    placeholder: 'Prénom Nom',
  },
  senderEmail: {
    label: 'Email'.toUpperCase(),
    key: 'sender_email',
    placeholder: 'email@domaine.fr',
  },
  senderPhone: {
    label: 'Téléphone'.toUpperCase(),
    key: 'sender_phone',
    placeholder: '00 00 00 00 00',
  },
}
