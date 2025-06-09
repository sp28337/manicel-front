"use client"

import { useRef, useEffect, useState } from "react"
import styles from "../../styles/user/profile.module.css"
import { ApproveSVG, EditSVG } from "../vectors"
import { useActionState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { changeNameAction } from "../../actions/profile"

export const NameForm = ({ name }: { name: string }) => {
        
    const [state, formAction, isPending] = useActionState(changeNameAction, undefined)
    const inputRef = useRef<HTMLInputElement>(null)
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
            inputRef.current?.focus()
        }
    }, [isEdit])

    return (
        <form className={styles.form} action={formAction}>
            <label 
                htmlFor="name"
                className={styles.label}
            >
                имя:
            </label>
            <div className={styles.inputWrapper}>
                <input 
                    id="name"
                    ref={inputRef}
                    name="name"
                    type="text"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value)
                        handleApprove(e.target.value)
                    }}
                    placeholder={name}
                    className={styles.input}
                    { ...isEdit ? undefined : { disabled: true }}
                />
                {state?.errors?.name && 
                <div className={styles.wrapper}>
                    <p className={styles.authError}>{state.errors.name}</p>
                </div>}
            </div>
            { isEdit ? 
                <button 
                    type="button"
                    title="отменить изменение имени"
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
                    title="изменить имя"
                    className={styles.editButton}
                    onClick={() => {setIsEdit(!isEdit)}}
                >
                    <EditSVG />
                </button>
            }
            { isShowApprove && 
                <button 
                    type="submit"
                    disabled={isPending}
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
                        