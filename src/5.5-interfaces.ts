// ? inheritance or extends
interface regularCustomer {
  name: string;
  id: number;
  subscription?: boolean;
}
interface customerVIP extends regularCustomer {
  codeVIP: number;
  issuedDate?: {
    year: number;
    month: number;
    date: number;
  };
}
const DipakVIP: customerVIP = {
  name: "Dipak Tamang",
  id: 22113,
  subscription: true,
  codeVIP: 10,
  issuedDate: {
    year: 2021,
    month: 12,
    date: 1,
  },
};
