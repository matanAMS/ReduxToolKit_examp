import axios from "axios";
import { updateStart,updateSuccess, updateError } from "./userSlice";

export const updateUser = async (user,dispatch) =>{
 dispatch(updateStart());
    try{
        const res = await axios.post("http://localhost:8080/api/users/:id/update");
        dispatch(updateSuccess(res.data));
    }catch(err){
        dispatch(updateError());
    }
}