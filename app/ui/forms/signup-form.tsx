"use client"

import styles from "../../styles/forms/signup-form.module.css"
import { signup } from "@/app/actions/auth"
import { useActionState } from "react"


export function SignupForm() {

    const [state, action, pending] = useActionState(signup, undefined)

    return (
        <form className={styles.form} action={action}>
            <div>
                <label htmlFor="name">Имя</label>
                <input id="name" name="name" placeholder="Имя" />
            </div>
            {state?.errors?.name && <p>{state.errors.name}</p>}
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" />
            </div>
            {state?.errors?.email && <p>{state.errors.email}</p>}
            <div>
                <label htmlFor="password">Пароль</label>
                <input id="password" name="password" type="password" />
            </div>
            {state?.errors?.password && (
            <div>
                <p>Password must:</p>
                    <ul>
                        {state.errors.password.map((error) => (
                        <li key={error}>- {error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button disabled={pending} type="submit">
                Зарегистрироваться
            </button>
        </form>
    )
}