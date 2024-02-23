import { z } from "zod";

const userValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string(),
        role: z.enum(["superAdmin", 'manager', 'seller']).optional(),
        password: z.string(),
        confirmpassword: z.string()
    })
})


const logInSchema = z.object({
    body: z.object({
        email: z.string(),
        password: z.string()
    })
})
export const userValidation = {
    userValidationSchema,
    logInSchema
}