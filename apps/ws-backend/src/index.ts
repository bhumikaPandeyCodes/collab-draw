import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken"
import {JWT_SECRET} from "@repo/backend-config/config"
const wss = new WebSocketServer({port:3002})


wss.on("connection",(socket, request)=>{

    const url = request.url
    const getToken = new URLSearchParams(url?.split("?")[1])
    console.log(JWT_SECRET, " in ws backend ")
    const token = getToken.get("roomId")||""
    // console.log(getToken)
    const decoded = jwt.verify(token, "JWT_SECRET")

    if((decoded as JwtPayload).id){
        //get db 
    }
    else{
        socket.close()
    }

    socket.send("hey you are connected to ws server")
    console.log("ws backend is runing")
})