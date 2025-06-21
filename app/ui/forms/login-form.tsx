"use client"

import styles from "../../styles/auth.module.css"
import { 
    login, 
    oAuthGoogle, 
    oAuthYandex 
} from "@/app/actions/auth"
import { useActionState } from "react"

export function LoginForm() {

    const [state, formAction, isPending] = useActionState(login, undefined)

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} action={formAction}>
                <h1 className={styles.h1}>вход</h1>
                <div className={styles.wrapper}>
                    <label 
                        htmlFor="username"
                        className={styles.label}
                    >
                    </label>
                    <input 
                        id="username"
                        name="username"
                        placeholder="Имя"
                        className={styles.input}
                    />
                </div>
                <div className={styles.wrapper}>
                    <label 
                        htmlFor="password"
                        className={styles.label}
                        >
                    </label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password"
                        placeholder="Пароль"
                        className={styles.input}
                        />
                </div>
                {state?.message && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.message}</p>
                </div>}
                <div className={styles.wrapper} >
                    <button 
                        disabled={isPending} 
                        type="submit"
                        className={styles.submitButton}
                    >
                        продолжить
                    </button>
                </div>
                <div className={styles.wrapper}>
                    <hr className={styles.hr}/>
                        <span className={styles.or}>или</span>
                    <hr className={styles.hr}/>
                </div>
                <div className={styles.wrapper}>
                    <button 
                        onClick={oAuthGoogle}
                        className={styles.oauthButtonGoogle}
                    >
                        продолжить c Google
                    </button>
                </div>
                <div className={styles.wrapper} >
                    <button  
                        onClick={oAuthYandex}
                        className={styles.oauthButtonYandex}
                    >
                        продолжить с Yandex
                    </button>
                </div>
                <div className={styles.signup}>
                    <p>Нет аккаунта? <a className={styles.link} href="/sign-up">зарегистрируйтесь</a></p>
                </div>
            </form>            
        </div>
    )
}