"use client"

import { useActionState } from "react"
import { updateLeadAction } from "@/app/actions/admin"
import type { CRMLeadSchema, LeadStatus } from "@/app/lib/definitions"
import styles from "@/app/styles/admin.module.css"

const initialState: { message?: string; success?: string } = {}

const leadStatuses: LeadStatus[] = ["NEW", "IN_PROGRESS", "WON", "LOST"]

export function LeadUpdateForm({ lead }: { lead: CRMLeadSchema }) {
    const [state, action, isPending] = useActionState(updateLeadAction, initialState)

    return (
        <form action={action} className={styles.form}>
            <input type="hidden" name="lead_id" value={lead.id} />

            <label htmlFor={`status-${lead.id}`}>Статус</label>
            <select id={`status-${lead.id}`} name="status" defaultValue={lead.status} className={styles.select}>
                {leadStatuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                ))}
            </select>

            <label htmlFor={`comment-${lead.id}`}>Комментарий</label>
            <textarea
                id={`comment-${lead.id}`}
                name="comment"
                defaultValue={lead.comment ?? ""}
                className={styles.textarea}
            />

            <label htmlFor={`manager-${lead.id}`}>ID менеджера</label>
            <input
                id={`manager-${lead.id}`}
                name="assigned_manager_id"
                type="number"
                defaultValue={lead.assigned_manager_id ?? ""}
                className={styles.input}
            />

            <button type="submit" className={styles.button} disabled={isPending}>
                {isPending ? "Сохраняем..." : "Сохранить лид"}
            </button>

            {state?.message ? <p className={`${styles.message} ${styles.error}`}>{state.message}</p> : null}
            {state?.success ? <p className={`${styles.message} ${styles.success}`}>{state.success}</p> : null}
        </form>
    )
}
