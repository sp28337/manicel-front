import { UserProfileSchema } from "@/app/lib/definitions"
import { LogoutButton, ProfileSettingsButton } from "../buttons"
import commonStyles from "../../styles/common.module.css"
import styles from "../../styles/user/profile.module.css"
import { PasswordForm } from "./password-form"
import { UsernameForm } from "./username-form"
import { NameForm } from "./name-form"
import { EmailForm } from "./email-form"

export function Profile({ userProfile }: { userProfile: UserProfileSchema }) {
    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={`${commonStyles.container} ${styles.header}` }>
                    <div className={styles.profilePanel}>
                        <h1 className={styles.h1}>
                            профиль
                        </h1>
                        <p className={styles.p}>
                            Добро пожаловать, {userProfile.username}
                        </p>
                        <div className={styles.formsWrapper}>
                            <UsernameForm username={userProfile.username} />
                            <NameForm name={userProfile.name ? userProfile.name : ""}/>
                            <EmailForm email={userProfile.email} />
                            <PasswordForm password={userProfile.password} />
                        </div>
                    </div>
                    <div className={styles.settingsPanel}>
                        <ProfileSettingsButton />
                        <LogoutButton />
                    </div>
                </div>
            </div >
            <div className={styles.body}>
            </div>
        </>
    )
}