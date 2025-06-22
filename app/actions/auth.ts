"use server"

import { SignupFormSchema, LoginFormSchema, FormState } from "@/app/lib/definitions"
import { createUser, loginUser } from "../lib/data"
import { redirect } from "next/navigation"
import { createSession, deleteSession } from "../lib/sessions"

export async function signup(state: FormState, formData: FormData) {

    const validatedFields = SignupFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email'),
    })
 
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const userData = await createUser(formData)

    if ([403].includes(userData)) {
        return {
            message: "пользователь с таким именем уже существует"       
        }
    }

    await createSession(userData)
    redirect(`/user/${userData.user_id}`)
}

export async function login(state: FormState, formData: FormData) {

    const validatedFields = LoginFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const user = await loginUser(formData)
    if ([401, 404].includes(user)) {
        return {
            message: "неверное имя пользователя или пароль"       
        }
    }
    
    await createSession(user)
    redirect(`/user/${user.user_id}`)
}

export async function logout() {
    await deleteSession("session")
    await deleteSession("id")
    redirect('/')
}
