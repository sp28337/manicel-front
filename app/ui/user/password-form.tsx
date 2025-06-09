"use client"

import { useRef, useEffect, useState } from "react"
import styles from "../../styles/user/profile.module.css"
import { ApproveSVG, EditSVG } from "../vectors"
import { useActionState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { 
    EyeSVG,
    ClosedEyeSVG
} from "../vectors"
import { updatePasswordAction } from "../../actions/profile"

export const PasswordForm = ({ password }: { password: string}) => {
    
    const [isOldPasswordHidden, setIsOldPasswordHidden] = useState(true)
    const [isNewPasswordHidden, setIsNewPasswordHidden] = useState(true)
    const [isNewRepeatPasswordHidden, setIsNewRepeatPasswordHidden] = useState(true)
    const inputPasswordRef = useRef<HTMLInputElement>(null)
    const inputNewPasswordRef = useRef<HTMLInputElement>(null)
    const inputNewRepeatPasswordRef = useRef<HTMLInputElement>(null)
    const [isEdit, setIsEdit] = useState(false)
    const [isShowApprove, setIsShowApprove] = useState(false)
    const [isShowRepeatApprove, setIsShowRepeatApprove] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [inputRepeatValue, setInputRepeatValue] = useState("")
    const [state, formAction, isPending] = useActionState(updatePasswordAction, undefined)

    const handleApprove = useDebouncedCallback((term) =>  {
        console.log(`Validating passwords... ${term}`)
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,}$/
        if (term.match(passwordRegex)) {
            setIsShowApprove(true)         
        } else {
            setIsShowApprove(false)
        }
    }, 300)

    const handleRepeatApprove = useDebouncedCallback((term, value) =>  {
        console.log(`Validating passwords... ${term}`)
        if (term.match(value)) {
            setIsShowRepeatApprove(true)         
        } else {
            setIsShowRepeatApprove(false)
        }
    }, 300)

    useEffect(() => {
        if (isEdit) {
            inputNewPasswordRef.current?.focus()
        }
    }, [isEdit])

    useEffect(() => {
        if (isShowApprove) {
            inputNewRepeatPasswordRef.current?.focus()
        }
    }, [isShowApprove])

    return (
        <>
            <form className={`${styles.form} ${styles.passwordForm}`} action={formAction} >
                <div className={styles.inputPasswordWrapper}>
                    <label 
                        htmlFor="oldPassword"
                        className={styles.label}
                    >
                        пароль:
                    </label>
                    <div className={styles.inputWrapper}>
                        <div className={styles.inputPassword}>
                            <input 
                                id="oldPassword" 
                                name="oldPassword"
                                ref={inputPasswordRef} 
                                value={password}
                                type={isOldPasswordHidden ? "password" : "text"}
                                placeholder={isOldPasswordHidden ? "•••••••••" : password}
                                className={styles.inputLine}
                                readOnly={true}
                                // disabled
                            />
                            <button 
                                onClick={() => {setIsOldPasswordHidden(!isOldPasswordHidden)}} 
                                type="button"
                                className={styles.eyeButton}
                            >
                                {isOldPasswordHidden ?
                                // <div className={styles.eyeSVG}>
                                    <EyeSVG />  :
                                // </div> :
                                <ClosedEyeSVG />}
                            </button>
                        </div>
                        {state?.errors?.oldPassword && 
                        <div className={styles.wrapper}>
                            <p className={styles.authError}>{state.errors.oldPassword}</p>
                        </div>}
                    </div>
                    { isEdit ? 
                        <button 
                            type="button"
                            title="отменить изменение пароля"
                            className={styles.editButton}
                            style={{fill:"#0000005a"}}
                            onClick={() => setTimeout(() => {
                                setIsEdit(!isEdit) 
                                // setIsShowApprove(false)
                                setInputValue("")
                            }, 300)}
                        >
                            <EditSVG />
                        </button> :
                        <button
                            type="button"
                            title="изменить пароль"
                            className={styles.editButton}
                            onClick={() => {setIsEdit(!isEdit)}}
                        >
                            <EditSVG />
                        </button>
                    }
                </div>
                
                {isEdit && 
                    <div className={styles.inputPasswordWrapper}>
                        <label 
                            htmlFor="newPassword"
                            className={`${styles.label} ${styles.passwordLabel}`}
                        >
                        </label>
                        <div className={styles.inputWrapper}>
                            <div className={styles.inputPassword}>
                                <input 
                                    id="newPassword" 
                                    name="newPassword"
                                    value={inputValue}
                                    ref={inputNewPasswordRef} 
                                    type={isNewPasswordHidden ? "password" : "text"}
                                    placeholder="введите новый пароль"
                                    className={styles.inputLine}
                                    onChange={e => {
                                        setInputValue(e.target.value)
                                        handleApprove(e.target.value)
                                    }}
                                />
                                <button 
                                    onClick={() => {setIsNewPasswordHidden(!isNewPasswordHidden)}} 
                                    type="button"
                                    className={styles.eyeButton}
                                >
                                    {isNewPasswordHidden ?
                                    <EyeSVG /> : 
                                    <ClosedEyeSVG />}
                                </button>
                            </div>
                            {state?.errors?.newPassword && 
                            <div className={styles.wrapper}>
                                <p className={styles.authError}>{state.errors.newPassword}</p>
                            </div>}
                        </div>
                        { isShowApprove && 
                            <button 
                                type="button"
                                title="пароль подходит требованиям"
                                className={styles.submitButton}
                            >
                                <ApproveSVG />
                            </button>
                        }
                    </div>
                }

                {isEdit && 
                    <div className={styles.inputPasswordWrapper}>
                        <label 
                            htmlFor="repeatedPassword"
                            className={`${styles.label} ${styles.passwordLabel}`} 
                        >
                        </label>
                        <div className={styles.inputWrapper}>
                            <div className={styles.inputPassword}>
                                <input
                                    {...isShowApprove ? {disabled: false} : {disabled: true}}
                                    disabled={isPending}
                                    id="repeatedPassword" 
                                    name="repeatedPassword"
                                    value={inputRepeatValue}
                                    ref={inputNewRepeatPasswordRef} 
                                    type={isNewRepeatPasswordHidden ? "password" : "text"}
                                    placeholder="повторите новый пароль"
                                    className={styles.inputLine}
                                    onChange={e => {
                                        setInputRepeatValue(e.target.value)
                                        handleRepeatApprove(e.target.value, inputValue)
                                    }}
                                />
                                <button 
                                    onClick={() => {setIsNewRepeatPasswordHidden(!isNewRepeatPasswordHidden)}} 
                                    type="button"
                                    className={styles.eyeButton}
                                >
                                    {isNewRepeatPasswordHidden ?
                                    <EyeSVG /> : 
                                    <ClosedEyeSVG />}
                                </button>
                            </div>
                            {state?.errors?.repeatedPassword && 
                            <div className={styles.wrapper}>
                                <p className={styles.authError}>{state.errors.repeatedPassword}</p>
                            </div>}
                        </div>
                        { isShowRepeatApprove && 
                            <button 
                                type="submit"
                                title="принять изменения"
                                className={styles.submitButton}
                                onClick={() => {
                                    setTimeout(() => {
                                        setIsEdit(!isEdit)
                                        setIsShowApprove(false)
                                        setInputRepeatValue("")
                                        setInputValue("")
                                        setIsShowRepeatApprove(false)
                                        setIsOldPasswordHidden(true)
                                    }, 300)
                                }}
                            >
                                <ApproveSVG />
                            </button>
                        }
                    </div>
                }
                {state?.message && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.message}</p>
                </div>}
            </form>
        </>
    )
}                        
                        