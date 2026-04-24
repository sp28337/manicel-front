import Link from "next/link"
import { getAdminDashboard } from "@/app/lib/data"
import { requireAdminSession } from "@/app/lib/admin-auth"
import { ToggleAdminRoleForm } from "@/app/ui/admin/toggle-admin-role-form"
import styles from "@/app/styles/admin.module.css"
import { getAdminRequestError } from "@/app/lib/admin-screen-utils"

export default async function AdminPage() {
    const session = await requireAdminSession()
    const dashboard = await getAdminDashboard(session.token)

    if (typeof dashboard === "number") {
        return <p className={styles.wrapper}>{getAdminRequestError(dashboard, "dashboard")}</p>
    }

    return (
        <main className={styles.wrapper}>
            <h1 className={styles.title}>Admin Dashboard</h1>

            <div className={styles.topActions}>
                <Link href="/admin/crm">Перейти к CRM-лидам</Link>
            </div>

            <section>
                <h2 className={styles.subtitle}>Метрики</h2>
                <div className={styles.cards}>
                    <article className={styles.card}><p className={styles.cardLabel}>Пользователи</p><p className={styles.cardValue}>{dashboard.users_total}</p></article>
                    <article className={styles.card}><p className={styles.cardLabel}>Админы</p><p className={styles.cardValue}>{dashboard.admins_total}</p></article>
                    <article className={styles.card}><p className={styles.cardLabel}>Продукты</p><p className={styles.cardValue}>{dashboard.products_total}</p></article>
                    <article className={styles.card}><p className={styles.cardLabel}>CRM лиды</p><p className={styles.cardValue}>{dashboard.crm_leads_total}</p></article>
                    <article className={styles.card}><p className={styles.cardLabel}>Новые лиды</p><p className={styles.cardValue}>{dashboard.crm_new_leads}</p></article>
                </div>
            </section>

            <section>
                <h2 className={styles.subtitle}>Управление ролью пользователя</h2>
                <ToggleAdminRoleForm />
            </section>
        </main>
    )
}
