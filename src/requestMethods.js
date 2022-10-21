import axios from "axios";

const BASE_URL = "https://aditya-ecom.herokuapp.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDU5ZjdjYTU1NWM2YzllNWQyZDc5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTc2MzMyOCwiZXhwIjoxNjY2MDIyNTI4fQ.MpJD8f5r50K4guroF460P1rg476etLLm8SPMiOguIPw"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});