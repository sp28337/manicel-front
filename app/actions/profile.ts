"use server"

import { revalidatePath } from 'next/cache'
import { 
    UpdatePasswordSchema,
    ChangeUsernameSchema,
    ChangeEmailSchema,
    ChangeNameSchema, 
    FormState 
} from "@/app/lib/definitions"
import { 
    changeName, 
    changeEmail,
    changeUsername,
    updatePassword,
} from "../lib/data"
import { cookies } from "next/headers"
import { decrypt } from "../lib/sessions"

export async function changeUsernameAction(state: FormState, formData: FormData) {

    const cookieStore = await cookies()
    const cookie = cookieStore.get("session")
    const payload = await decrypt(cookie?.value)
    const token = cookie?.value

    const validatedFields = ChangeUsernameSchema.safeParse({
            username: formData.get("username"),
        })
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await changeUsername(formData, token, payload?.user_id)
    if (response === 403) {
        return {
            message: "этот логин уже используется"       
        }
    }
    revalidatePath(`/user/${payload?.user_id}`)
}

export async function changeNameAction(state: FormState, formData: FormData) {

    const cookieStore = await cookies()
    const cookie = cookieStore.get("session")
    const payload = await decrypt(cookie?.value)
    const token = cookie?.value

    const validatedFields = ChangeNameSchema.safeParse({
            name: formData.get("name"),
        })
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    await changeName(formData, token, payload?.user_id)
    revalidatePath(`/user/${payload?.user_id}`)
}

export async function changeEmailAction(state: FormState, formData: FormData) {

    const cookieStore = await cookies()
    const cookie = cookieStore.get("session")
    const payload = await decrypt(cookie?.value)
    const token = cookie?.value

    const validatedFields = ChangeEmailSchema.safeParse({
            email: formData.get("email"),
        })
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await changeEmail(formData, token, payload?.user_id)
    if (response === 403) {
        return {
            message: "пользователь с таким email уже существует"       
        }
    }
    revalidatePath(`/user/${payload?.user_id}`)
}

export async function updatePasswordAction(state: FormState, formData: FormData) {

    const cookieStore = await cookies()
    const cookie = cookieStore.get("session")
    const payload = await decrypt(cookie?.value)
    const token = cookie?.value
    console.log(formData.get("oldPassword"), formData.get("newPassword"), formData.get("repeatedPassword"))
    const validatedFields = UpdatePasswordSchema.safeParse({
            oldPassword: formData.get("oldPassword"),
            newPassword: formData.get("newPassword"),
            repeatedPassword: formData.get("repeatedPassword"),
        })
    
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await updatePassword(formData, token, payload?.user_id)
    if (response === 400) {
        return {
            message: "пароли не совпадают"       
        }
    }
    revalidatePath(`/user/${payload?.user_id}`)
}