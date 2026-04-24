"use server"

import { revalidatePath } from "next/cache"
import {
    ToggleAdminRoleSchema,
    UpdateLeadSchema,
} from "@/app/lib/definitions"
import { patchAdminRole, patchCRMLead } from "@/app/lib/data"
import { requireAdminSession } from "@/app/lib/admin-auth"
import { toAssignedManagerId } from "@/app/lib/admin-utils"

type AdminActionState = {
    errors?: Record<string, string[] | undefined>
    message?: string
    success?: string
}

export async function updateLeadAction(state: AdminActionState, formData: FormData): Promise<AdminActionState> {
    const session = await requireAdminSession()

    const validatedFields = UpdateLeadSchema.safeParse({
        leadId: formData.get("lead_id"),
        status: formData.get("status"),
        comment: formData.get("comment") ?? undefined,
        assigned_manager_id: formData.get("assigned_manager_id")
            ? formData.get("assigned_manager_id")
            : undefined,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await patchCRMLead({
        authToken: session.token,
        leadId: validatedFields.data.leadId,
        payload: {
            status: validatedFields.data.status,
            comment: validatedFields.data.comment,
            assigned_manager_id: toAssignedManagerId(validatedFields.data.assigned_manager_id),
        },
    })

    if (response === 401) {
        return { message: "Сессия истекла. Войдите заново." }
    }

    if (response === 403) {
        return { message: "Недостаточно прав для обновления лида." }
    }

    if (typeof response === "number") {
        return { message: "Не удалось обновить лид." }
    }

    revalidatePath("/admin/crm")
    return { success: "Лид обновлён." }
}

export async function toggleAdminRoleAction(
    state: AdminActionState,
    formData: FormData,
): Promise<AdminActionState> {
    const session = await requireAdminSession()

    const validatedFields = ToggleAdminRoleSchema.safeParse({
        target_user_id: formData.get("target_user_id"),
        is_admin: formData.get("is_admin") === "on",
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await patchAdminRole({
        authToken: session.token,
        targetUserId: validatedFields.data.target_user_id,
        isAdmin: validatedFields.data.is_admin,
    })

    if (response === 401) {
        return { message: "Сессия истекла. Войдите заново." }
    }

    if (response === 403) {
        return { message: "Недостаточно прав для изменения роли." }
    }

    if (typeof response === "number") {
        return { message: "Не удалось обновить роль пользователя." }
    }

    revalidatePath("/admin")
    return { success: "Роль пользователя обновлена." }
}
