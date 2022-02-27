import { LoginFail, LoginStart, LoginSuccess } from "./Loginredux";
// import { Api} from "../api/baseurl"
import api from "../api/baseurl";

export const login = async (dispatch, user,handle)=>{ 
    dispatch(LoginStart());
    try
    { console.log(handle)
        const res = await api.post("/api/auth/login", user)
        handle(user.username)
        dispatch(LoginSuccess(res.data))
    } catch (err)
    {
        dispatch(LoginFail());
    }
}