import axios from "axios";

import { AccountType } from "../Types";
const url = "http://localhost:3000/";

function createNewUser(data: AccountType) {
  axios
    .post(url, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export default createNewUser;

export const loginUser = async (data: { email: string; password: string }) => {
  let userData: AccountType[] = [];
  await axios
    .get(url + "users")
    .then((res) => {
      userData = res.data;
    })
    .catch((err) => console.log(err));
  userData = userData.filter(
    (obj: AccountType) =>
      obj.Email == data.email && obj.password == data.password
  );
  return userData;
};

export const stardatas = async () => {
  let stardata: any[] = [];
  await axios
    .get(url + "stars")
    .then((res) => {
      stardata = res.data;
    })

    .catch((err) => console.log(err));
  return stardata;
};

export async function updateStars(
  key: string,
  categoryNumber: number,
  starCount: number
) {
  const service = key;
  const rating = starCount;
  const index = categoryNumber;

  await axios
    .put(url + `stars/${index}`, { serviceName: service, rating: rating })
    .then(function (res) {
      console.log(res);
    });
}
