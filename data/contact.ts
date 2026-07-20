export const contact = {
  title: 'CONTACT US NOW',
  form: {
    action: '#',
    fields: [
      { name: 'first', label: 'First Name', type: 'text', required: true },
      { name: 'last', label: 'Last Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', required: true },
    ],
    message: { name: 'your-message', label: 'Message', required: false },
    submitLabel: 'Submit',
  },
  popup: {
    companyName: 'High Ground Land Solutions',
    address: 'Suite A, 2809 8th Street, Tuscaloosa, AL 35401',
    callLabel: 'CALL US: (205) 410-2699',
    emailLabel: 'Email: adam@highgroundland.com',
  },
};
