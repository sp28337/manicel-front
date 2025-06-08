"use client"

import { useRef, useEffect, useState } from "react"
import styles from "../../styles/user/profile.module.css"
import { ApproveSVG, EditSVG } from "../vectors"
import { useActionState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { changeEmailAction } from "../../actions/profile"


export const EmailForm = ({ email }: { email: string }) => {
        
    const [state, formAction, isPending] = useActionState(changeEmailAction, undefined)
    const inputEmailRef = useRef<HTMLInputElement>(null)
    const [isEdit, setIsEdit] = useState(false)
    const [isShowApprove, setIsShowApprove] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const handleApprove = useDebouncedCallback((term) =>  {
        console.log(`Validating input... ${term}`)
        const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (term.match(emailPattern)) {
            setIsShowApprove(true)         
        } else {
            setIsShowApprove(false)
        }
    }, 300)

    useEffect(() => {
        if (isEdit) {
            inputEmailRef.current?.focus()
        }
    }, [isEdit])

    return (
        <form className={styles.form} action={formAction}>
            <label 
                htmlFor="name"
                className={styles.label}
            >
                email:
            </label>
            <div className={styles.inputWrapper}>
                <input 
                    id="email"
                    ref={inputEmailRef}
                    name="email"
                    type="text"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value)
                        handleApprove(e.target.value)
                    }}
                    placeholder={email}
                    className={styles.input}
                    { ...isEdit ? undefined : { disabled: true }}
                />
                {state?.errors?.email && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.errors.email}</p>
                </div>}
                {state?.message && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.message}</p>
                </div>}
            </div>
            { isEdit ? 
                <button 
                    type="button"
                    title="отменить изменение email"
                    className={styles.editButton}
                    style={{fill:"#0000005a"}}
                    onClick={() => setTimeout(() => {
                        setIsEdit(!isEdit) 
                        setIsShowApprove(false)
                        setInputValue("")
                    }, 300)}
                >
                    <EditSVG />
                </button> :
                <button
                    type="button"
                    title="изменить email"
                    className={styles.editButton}
                    onClick={() => {setIsEdit(!isEdit)}}
                >
                    <EditSVG />
                </button>
            }
            { isShowApprove && 
                <button
                    disabled={isPending} 
                    type="submit"
                    title="применить изменения"
                    className={styles.submitButton}
                    onClick={() => {
                        setTimeout(() => {
                            setIsEdit(!isEdit)
                            setIsShowApprove(false)
                        }, 300)
                    }}
                >
                    <ApproveSVG />
                </button>}
        </form>
    )
}                        
                        