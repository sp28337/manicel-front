import { UserProfileSchema } from "@/app/lib/definitions"
import styles from "../../styles/profile.module.css"
import { ExitProfileButton } from "../buttons"

export function Profile({ userProfile }: { userProfile: UserProfileSchema }) {
    return (
        <div className={styles.wrapper}>
            <h1>
                user page
            </h1>
            <p>
                {JSON.stringify(userProfile)}
            </p>
            <ExitProfileButton />
        </div>
    )
}