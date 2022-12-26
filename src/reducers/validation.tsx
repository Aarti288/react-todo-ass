const initialData = {
  usrData: {
    Fullname: "",
    Date: "",
    Email: "",
  },
};
const validationReducer = (
  state = initialData,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default validationReducer;
