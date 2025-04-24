import { Request,NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = "1234"

export function verifyToken(req:Request,res: Response,next: NextFunction){

    const token = req.headers["authorization"] ?? ""
    
    const decoded = jwt.verify(token, JWT_SECRET)
    if(decoded){
        req.body.id = (decoded as jwt.JwtPayload).id
    }
    else{
        res.status(403).json({success: false, message: "token invalid"})
    }

}