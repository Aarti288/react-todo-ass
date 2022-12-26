import { AccountType } from "../Types";

export const addValidation = (data: string) => {
  return {
    type: "USER_DATA",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const loginAction = (data: AccountType) => ({
  type: "LOGIN_ACTION",
  payload: data,
});
