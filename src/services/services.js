export const formatPhone = (phone) => {
  return phone.replace(/\B(?=(\d{2})+(?!\d))/g, ' ')
};
