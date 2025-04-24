import {z} from "zod"

export const SignUpSchema= z.object({
    username: z.string().max(20).min(3),
    password: z.string().max(20).min(3),
    email: z.string().max(20).min(3)
})

export const SignInSchema = z.object({
    email: z.string().max(20).min(3),
    password: z.string().max(20).min(3)
})

export const CreateRoomSchema = z.object({
    name: z.string().max(20).min(3)
})