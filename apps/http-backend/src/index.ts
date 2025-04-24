import express from "express";
import jwt from "jsonwebtoken"
import { verifyToken } from "./middleware";
import {JWT_SECRET} from "@repo/backend-config/config"
import {CreateRoomSchema, SignInSchema, SignUpSchema} from "@repo/common/types"
const app = express()


app.post("/signup", (req,res)=>{

    const parsedData = SignUpSchema.safeParse(req.body)
    if(!parsedData.success){
        res.json({success: "false", message: "Incorrect input"})
    }
    else{
        const {username, password, email} = parsedData.data
    }
    // zod verification 
    // put inside the postgresdb using prisma
    //create jwt token
    const id = "sw3456ygjyt"
    const token = jwt.sign(id, JWT_SECRET)
    res.json({success:"true", token})
})


app.post("/signin", (req,res)=>{

    const parsedData = SignInSchema.safeParse(req.body)

    if(!parsedData.success){
        res.json({success: false, message: "Incorrect Inputs"})
    }
    else{
        const {email, password} = parsedData.data
    }
    // zod verification 
    // put inside the postgresdb using prisma
    //create jwt token
    const id = "sw3456ygjyt"
    const token = jwt.sign(id, JWT_SECRET)
    res.json({success:"true", token})
})


app.post("/room",verifyToken ,(req,res)=>{

    const parsedData = CreateRoomSchema.safeParse(req.body)
    if(!parsedData.success){{
        res.json({success:false, message:"Incorrect input"})
    }}
    const room = req.body
    const id = req.body.id
    //create room
    res.json({roomId: "123"})
})



app.listen(3001,()=>{
    console.log(JWT_SECRET, " in HTTP backend")
    console.log("HTTPS BE listening at 3001")
})

