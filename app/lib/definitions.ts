import { z } from "zod"
 
export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long." })
        .trim(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z
        .string()
        .min(8, { message: "Be at least 8 characters long" })
        .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
        .regex(/[0-9]/, { message: "Contain at least one number." })
        .regex(
            /[^a-zA-Z0-9]/, 
            { message: "Contain at least one special character." }
        ).trim(),
})

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