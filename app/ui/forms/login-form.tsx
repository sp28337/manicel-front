"use client"

import Link from "next/link"
import styles from "../../styles/auth.module.css"
import { login } from "@/app/actions/auth"
import { useActionState } from "react"

export function LoginForm() {

    const [state, formAction, isPending] = useActionState(login, undefined)

    return (
        <div className={styles.formWrapper}>
            <main className={styles.main}>
                <h1 className={styles.h1}>вход</h1>
                <form className={styles.form} action={formAction}>
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
                        <Link 
                            href={`${process.env.NEXT_PUBLIC_REDIRECT_API}/auth/login/google`}
                            className={`${styles.oauthButton} ${styles.google}`}
                        >
                            продолжить c Google
                        </Link>
                    </div>
                    <div className={styles.wrapper} >
                        <Link  
                            href={`${process.env.NEXT_PUBLIC_REDIRECT_API}/auth/login/yandex`}
                            className={`${styles.oauthButton} ${styles.yandex}`}
                        >
                            продолжить с Yandex
                        </Link>
                    </div>
                    <div className={styles.signup}>
                        <p>Нет аккаунта? <a className={styles.link} href="/sign-up">зарегистрируйтесь</a></p>
                    </div>
                </form>            
            </main>
        </div>
    )
}