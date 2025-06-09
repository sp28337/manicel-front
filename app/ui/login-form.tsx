"use client"

import Image from "next/image"
import styles from "../styles/login-form.module.css"
import { login } from "@/app/actions/auth"
import { useActionState } from "react"
import backgroundImg from "@/public/salt-body-scrub-500w.png"

export function LoginForm() {

    const [state, formAction, isPending] = useActionState(login, undefined)

    return (
        <div className={`${styles.formWrapper} `}>
            <Image
                className={styles.backgroundImage}
                src={backgroundImg}
                alt=""
                quality={0}
                sizes="100vw"
                priority
            />
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
                {/* <div className={styles.wrapper}>
                    <hr className={styles.hr}/>
                        <span className={styles.or}>или</span>
                    <hr className={styles.hr}/>
                </div>
                <div className={styles.wrapper}>
                    <button 
                        // disabled={isPending} 
                        type="button"
                        className={styles.oauthButton}
                    >
                        продолжить c Google
                    </button>
                </div>
                <div className={styles.wrapper}>
                    <button 
                        // disabled={isPending} 
                        type="button"
                        className={styles.oauthButton}
                    >
                        продолжить с Yandex
                    </button>
                </div> */}
            </form>            
        </div>
    )
}