export const formattedCpf = (cpf) => {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(cpfRegex, '$1.$2.$3-$4');
};

export const formattedPhone = (phoneNumber) => {
  const phoneRegex = /^(\d{2})(\d{4,5})(\d{4})$/;
  return phoneNumber.replace(phoneRegex, '($1) $2-$3');
};
