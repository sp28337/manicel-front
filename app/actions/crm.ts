"use server"

import { CreateLeadSchema } from "@/app/lib/definitions"
import { createCRMLead } from "@/app/lib/data"

export type CreateLeadState = {
    errors?: Record<string, string[] | undefined>
    message?: string
    success?: string
} | undefined

export async function createLeadAction(state: CreateLeadState, formData: FormData): Promise<CreateLeadState> {
    const validatedFields = CreateLeadSchema.safeParse({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email") ?? "",
        comment: formData.get("comment") ?? undefined,
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const response = await createCRMLead({
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
        email: validatedFields.data.email || undefined,
        comment: validatedFields.data.comment,
    })

    if (typeof response === "number") {
        return { message: "Не удалось отправить заявку. Попробуйте позже." }
    }

    return { success: "Спасибо! Ваша заявка отправлена." }
}
