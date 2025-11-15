import User from "../models/User.js";

//Middleware để kiểm tra xem user được xác thực hay chưa
export const protect = async (req, res, next)=>{
    const {userId} = req.auth();
    if(!userId){
        res.json({success: false, message: "Chưa được xác thực"})
    }else{
        const user = await User.findById(userId);
        req.user = user;
        next()
    }

}