"use client"

import { useActionState } from "react"
import { toggleAdminRoleAction } from "@/app/actions/admin"
import styles from "@/app/styles/admin.module.css"

const initialState: { message?: string; success?: string } = {}

export function ToggleAdminRoleForm() {
    const [state, action, isPending] = useActionState(toggleAdminRoleAction, initialState)

    return (
        <form action={action} className={styles.form}>
            <label htmlFor="target_user_id">ID пользователя</label>
            <input id="target_user_id" name="target_user_id" type="number" className={styles.input} required />

            <label className={styles.statusRow}>
                <input name="is_admin" type="checkbox" />
                Выдать admin права
            </label>

            <button type="submit" className={styles.button} disabled={isPending}>
                {isPending ? "Сохраняем..." : "Обновить роль"}
            </button>

            {state?.message ? <p className={`${styles.message} ${styles.error}`}>{state.message}</p> : null}
            {state?.success ? <p className={`${styles.message} ${styles.success}`}>{state.success}</p> : null}
        </form>
    )
}
