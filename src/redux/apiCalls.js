import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, user, user2) => {
    dispatch(loginStart());
    try {
        await publicRequest.post("/auth/register", user);


        const res = await publicRequest.post("/auth/login", user2);

        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

// export const logout = async (dispatch, user, user2) => {
//     dispatch(logout());
//     try {
//         await publicRequest.post("/auth/register", user);


//         const res = await publicRequest.post("/auth/login", user2);

//         dispatch(loginSuccess(res.data));
//     } catch (err) {
//         dispatch(loginFailure());
//     }
// };