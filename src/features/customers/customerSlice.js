const initialCustomerState = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

const customerReducer = (state = initialCustomerState, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: fullName,
      nationalID: nationalID,
      createAt: new Date().toISOString(),
    },
  };
};
export const updateCustomerName = (fullName) => {
  return {
    type: "customer/updateName",
    payload: {
      fullName: fullName,
    },
  };
};

export default customerReducer;
