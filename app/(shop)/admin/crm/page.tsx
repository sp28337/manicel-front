import Link from "next/link"
import { getCRMLeads } from "@/app/lib/data"
import { requireAdminSession } from "@/app/lib/admin-auth"
import { LeadUpdateForm } from "@/app/ui/admin/lead-update-form"
import type { LeadStatus } from "@/app/lib/definitions"
import styles from "@/app/styles/admin.module.css"
import { isLeadStatus } from "@/app/lib/admin-utils"
import { getAdminRequestError } from "@/app/lib/admin-screen-utils"

const statuses: LeadStatus[] = ["NEW", "IN_PROGRESS", "WON", "LOST"]

export default async function AdminCRMPage({
    searchParams,
}: {
    searchParams: Promise<{ status_filter?: LeadStatus }>
}) {
    const params = await searchParams
    const statusFilter = isLeadStatus(params.status_filter)
        ? (params.status_filter as LeadStatus)
        : undefined

    const session = await requireAdminSession()
    const leads = await getCRMLeads({ authToken: session.token, statusFilter })

    if (typeof leads === "number") {
        return <p className={styles.wrapper}>{getAdminRequestError(leads, "лидов")}</p>
    }

    return (
        <main className={styles.wrapper}>
            <h1 className={styles.title}>CRM лиды</h1>
            <div className={styles.topActions}>
                <Link href="/admin">← К dashboard</Link>
                <form action="/admin/crm">
                    <select name="status_filter" defaultValue={statusFilter ?? ""} className={styles.select}>
                        <option value="">Все статусы</option>
                        {statuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                    <button className={styles.button} type="submit">Фильтровать</button>
                </form>
            </div>

            {leads.length === 0 ? (
                <p>Лидов не найдено.</p>
            ) : (
                <section className={styles.leadList}>
                    {leads.map((lead) => (
                        <article key={lead.id} className={styles.leadCard}>
                            <p className={styles.meta}>
                                Лид #{lead.id} · {lead.name ?? "Без имени"} · {lead.phone ?? lead.email ?? "контакт не указан"}
                            </p>
                            <LeadUpdateForm lead={lead} />
                        </article>
                    ))}
                </section>
            )}
        </main>
    )
}
