const initialValues = {
  id: "",
  createdAt: Date.now(),
  paymentDue: "",
  paymentTerms: "",
  clientName: "",
  clientEmail: "",
  status: "pending",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
};

export default initialValues;
