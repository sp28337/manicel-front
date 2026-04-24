import styles from "@/app/styles/admin.module.css"
import { CRMLeadForm } from "@/app/ui/forms/crm-lead-form"

export default function CRMPage() {
    return (
        <main className={styles.wrapper}>
            <h1 className={styles.title}>Оставить заявку</h1>
            <p className={styles.meta}>Заполните форму, и менеджер свяжется с вами.</p>
            <CRMLeadForm />
        </main>
    )
}
