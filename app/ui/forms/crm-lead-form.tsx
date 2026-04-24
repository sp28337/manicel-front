"use client"

import { useActionState } from "react"
import { createLeadAction, type CreateLeadState } from "@/app/actions/crm"
import styles from "@/app/styles/admin.module.css"

const initialState: CreateLeadState = undefined

export function CRMLeadForm() {
    const [state, action, isPending] = useActionState(createLeadAction, initialState)

    return (
        <form action={action} className={styles.form}>
            <label htmlFor="lead_name">Имя</label>
            <input id="lead_name" name="name" className={styles.input} required />

            <label htmlFor="lead_phone">Телефон</label>
            <input id="lead_phone" name="phone" className={styles.input} required />

            <label htmlFor="lead_email">Email (опционально)</label>
            <input id="lead_email" name="email" type="email" className={styles.input} />

            <label htmlFor="lead_comment">Комментарий</label>
            <textarea id="lead_comment" name="comment" className={styles.textarea} />

            <button type="submit" className={styles.button} disabled={isPending}>
                {isPending ? "Отправляем..." : "Отправить заявку"}
            </button>

            {state?.message ? <p className={`${styles.message} ${styles.error}`}>{state.message}</p> : null}
            {state?.success ? <p className={`${styles.message} ${styles.success}`}>{state.success}</p> : null}
        </form>
    )
}
