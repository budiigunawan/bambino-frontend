export const rupiahFormat = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanitizeQuery = (query: any) => {
  for (const key in query) {
    if (!query[key]) {
      delete query[key];
    }
  }
  return query;
};
