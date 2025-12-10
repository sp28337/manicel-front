"use client"

import { useRef, useEffect, useState } from "react"
import styles from "../../styles/user/profile.module.css"
import { ApproveSVG, EditSVG } from "../vectors"
import { useActionState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { changeUsernameAction } from "../../actions/profile"

export const UsernameForm = ({ username }: { username: string }) => {
        
    const [state, formAction, isPending] = useActionState(changeUsernameAction, undefined)
    const inputUsernameRef = useRef<HTMLInputElement>(null)
    const [isEdit, setIsEdit] = useState(false)
    const [isShowApprove, setIsShowApprove] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const handleApprove = useDebouncedCallback((term) =>  {
        console.log(`Validating input... ${term}`)
        if (term.length >= 2) {
            setIsShowApprove(true)         
        } else {
            setIsShowApprove(false)
        }
    }, 300)

    useEffect(() => {
        if (isEdit) {
            inputUsernameRef.current?.focus()
        }
    }, [isEdit])

    return (
        <form className={styles.form} action={formAction}>
            <label 
                htmlFor="username"
                className={styles.label}
            >
                логин:
            </label>

            <div className={styles.inputWrapper}>
                <input 
                    id="username"
                    ref={inputUsernameRef}
                    name="username"
                    type="text"
                    disabled={isPending}
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value)
                        handleApprove(e.target.value)
                    }}
                    placeholder={username}
                    className={styles.input}
                    { ...isEdit ? undefined : { disabled: true }}
                />
                {state?.errors?.username && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.errors.username}</p>
                </div>}
                {state?.message && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.message}</p>
                </div>}
            </div>
            { isEdit ? 
                <button 
                    type="button"
                    title="отменить изменение логина"
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
                    title="изменить логин"
                    className={styles.editButton}
                    onClick={() => {setIsEdit(!isEdit)}}
                >
                    <EditSVG />
                </button>
            }
            { isShowApprove && 
                <button 
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
                </button>
                }
        </form>
    )
}                        
                        