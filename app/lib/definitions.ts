import { z } from "zod"
 
export const SignupFormSchema = z.object({
    username: z
        .string()
        .trim()
        .min(2, { message: "Логин должен содержать как минимум 2 символа." }),
    email: z.string().email({ message: "Пожалуйста, введите корректный email." }).trim(),
    password: z
        .string().trim()
        .min(8, { message: "Пароль должен содержать как минимум 8 символов" })
        .regex(/[a-zA-Z]/, { message: "Пароль должен содержать как минимум одну букву." })
        .regex(/[0-9]/, { message: "Пароль должен содержать как минимум одну цифру." })
        .regex(
            /[^a-zA-Z0-9]/, 
            { message: "Пароль должен содержать как минимум один специальный символ." }
        ),
})

// export const SignupFormSchema = z.object({
//     username: z
//         .string()
//         .trim(),
//     email: z
//         .string()
//         // .email({ message: "Please enter a valid email." })
//         .trim(),
//     password: z
//         .string()
//         // .min(8, { message: "Be at least 8 characters long" })
//         // .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
//         // .regex(/[0-9]/, { message: "Contain at least one number." })
//         // .regex(
//         //     /[^a-zA-Z0-9]/, 
//         //     { message: "Contain at least one special character." }
//         // )
//         .trim(),
// })

export const LoginFormSchema = z.object({
    username: z
        .string()
        .trim(),
    password: z
        .string()
        .trim(),
})

export const UpdatePasswordSchema = z.object({
    oldPassword: z
        .string()
        .trim(),
    newPassword: z
        .string()
        .min(8, { message: "Be at least 8 characters long" })
        .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
        .regex(/[0-9]/, { message: "Contain at least one number." })
        .regex(
            /[^a-zA-Z0-9]/, 
            { message: "Contain at least one special character." }
        ).trim(),
    repeatedPassword: z
        .string()
        .min(8, { message: "Be at least 8 characters long" })
        .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
        .regex(/[0-9]/, { message: "Contain at least one number." })
        .regex(
            /[^a-zA-Z0-9]/, 
            { message: "Contain at least one special character." }
        ).trim(),
})

export const ChangeNameSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Длина имени должна быть как минимум 2 символа" })
        .trim(),
})

export const ChangeUsernameSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Длина логина должна быть как минимум 2 символа" })
        .trim(),
})

export const ChangeEmailSchema = z.object({
    email: z.string().email({ message: "Пожалуйста, введите корректный email" }).nullable(),
})

export const LeadStatusSchema = z.enum(["NEW", "IN_PROGRESS", "WON", "LOST"])

export const UpdateLeadSchema = z.object({
    leadId: z.coerce.number().int().positive({ message: "Некорректный ID лида" }),
    status: LeadStatusSchema,
    comment: z.string().max(2000, { message: "Комментарий слишком длинный" }).optional(),
    assigned_manager_id: z
        .union([z.coerce.number().int().positive(), z.nan()])
        .optional(),
})

export const ToggleAdminRoleSchema = z.object({
    target_user_id: z.coerce.number().int().positive({ message: "Некорректный ID пользователя" }),
    is_admin: z.boolean(),
})

export const CreateLeadSchema = z.object({
    name: z.string().trim().min(2, { message: "Введите имя (минимум 2 символа)." }),
    phone: z.string().trim().min(6, { message: "Введите корректный телефон." }),
    email: z.string().trim().email({ message: "Введите корректный email." }).optional().or(z.literal("")),
    comment: z.string().trim().max(2000, { message: "Комментарий слишком длинный." }).optional(),
})

export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        username?: string[]
        password?: string[]
        oldPassword?: string[]
        newPassword?: string[]
        repeatedPassword?: string[]
      }
      message?: string
    }
  | undefined

type VolumeSchema = {
    volume: string,
}

type EffectSchema = {
    description: string
}

type CategorySchema = {
    name: string
    description: string
}

type ComplectationSchema = {
    name: string
}

type ExpirationDateSchema = {
    before_opening: string,
    after_opening: string
}

type IngredientSchema = {
    name: string,
    description: string
}

type FlavorSchema = {
    name: string,
    description: string,
    ingredients: IngredientSchema[],
}

export type CatalogProductsSchema = {
    id: number,
    name: string,
    name_ru: string,
    articule: number
    type: string, 
}

export type BestsellersSchema = {
    articule: number,
    id: number,
    name: string,
    name_ru: string,
    type: string,
    reviews: number,
    ingredients: string[],
  }

export type ProductSchema = {
    id: number,
    name: string,
    note: string,
    description: string,
    volumes: VolumeSchema[],
    flavor: FlavorSchema,
    articule: number,
    attention: string,
    expiration_date: ExpirationDateSchema,
    category: CategorySchema,
    complectation: ComplectationSchema,
    effects: EffectSchema[],
}

export type SearchSchema = {
    id: number,
    name: string,
    name_ru: string,
    articule: number
    type: string, 
}

export type UserProfileSchema = {
    id: number,
    username: string,
    password: string,
    name: string | null,
    email: string,
    admin: boolean,
    created_at: string
}

export type LeadStatus = z.infer<typeof LeadStatusSchema>

export type CRMLeadSchema = {
    id: number
    status: LeadStatus
    created_at?: string
    name?: string | null
    phone?: string | null
    email?: string | null
    comment?: string | null
    assigned_manager_id?: number | null
}

export type UpdateCRMLeadPayload = {
    status: LeadStatus
    comment?: string | null
    assigned_manager_id?: number | null
}

export type AdminDashboardSchema = {
    users_total: number
    admins_total: number
    products_total: number
    crm_leads_total: number
    crm_new_leads: number
}
