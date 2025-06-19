"use client"

import Link from "next/link"
import styles from "../../styles/auth.module.css"
import { signup } from "@/app/actions/auth"
import { useActionState, useState } from "react"


export function SignUpForm() {

    const [state, formAction, isPending] = useActionState(signup, undefined)
    const [agree, setAgree] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgree(e.target.checked);
    }

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} action={formAction}>
                <h1 className={styles.h1}>регистрация</h1>
                
                <div className={styles.wrapper}>
                    <label 
                        htmlFor="username"
                        className={styles.label}
                    >
                    </label>
                    <input 
                        id="username"
                        name="username"
                        placeholder="Логин"
                        className={styles.input}
                    />
                </div>
                {state?.errors?.username && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.errors.username}</p>
                </div>}

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
                {state?.errors?.password && !state?.errors?.username && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.errors.password[0]}</p>
                </div>}

                <div className={styles.wrapper}>
                    <label 
                        htmlFor="email"
                        className={styles.label}
                        >
                    </label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        />
                </div>
                {state?.errors?.email && !state?.errors?.password && !state?.errors?.username &&
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.errors.email}</p>
                </div>}

                <div className={styles.wrapper}>
                    <input 
                        type="checkbox" 
                        id="agree" 
                        name="agree"
                        checked={agree}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                    />
                    <label htmlFor="agree" className={styles.checkbox}>
                        Регистрируясь, вы соглашаетесь с{" "}
                        <Link 
                            href="/privacy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            политикой конфиденциальности
                        </Link>
                        {" и "}
                        <Link 
                            href="/agreement" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            пользовательским соглашением
                        </Link>
                    </label>
                </div>
                {state?.message && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.message}</p>
                </div>}
                <div className={styles.wrapper} >
                    <button
                        disabled={isPending || !agree} 
                        type="submit"
                        className={agree ? styles.submitButton : styles.submitButtonDisabled}
                    >
                        подтвердить
                    </button>
                </div>

                {/* <div className={styles.wrapper}>
                    <hr className={styles.hr}/>
                        <span className={styles.or}>или</span>
                    <hr className={styles.hr}/>
                </div>
                <div className={styles.wrapper}>
                    <a 
                        // onClick={oauthGoogle}
                        type="button"
                        href="http://127.0.0.1:8000/auth/login/google" 
                        className={styles.oauthButton}
                    >
                        продолжить c Google
                    </a>
                </div>
                <div className={styles.wrapper} >
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