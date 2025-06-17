import commonStyles from "../../styles/common.module.css"
import styles from "../../styles/homepage/header.module.css"
import Image from "next/image"
import mainImg from "@/public/all-800w.png"
import Link from "next/link"
import { HeaderSkeleton } from "../skeletons"

export const Header = () => {

    return (
        <HeaderSkeleton>
            <div className={`${commonStyles.container} ${styles.header}` }>
                
                <div className={styles.textBlock}>
                    <h1 className={styles.h1}>
                        <span className={styles.span}>
                            SALT BODY SCRUB
                        </span>
                        забота в каждом мгновении
                        <br />
                    </h1>
                    <div className={styles.p}>
                        <p className={styles.pText1}>
                            специально для тебя мы создали ароматы, 
                            превращающие заботу о коже в райское наслаждение
                        </p>
                        <p className={styles.pText2}>
                            Собери всю коллекцию и получи подарок от&emsp;
                            <span style={{textTransform: "uppercase"}}>
                                MANICEL
                            </span>
                        </p>
                    </div>
                    <Link href="/catalog" className={styles.catalogLink}>
                        каталог
                    </Link>
                </div>
                <div className={styles.imgWrapper}>
                    <Image className={styles.mainImage}
                        src={mainImg} 
                        alt="piramyd of all scrubs with raspberry on top of some cans"
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
        </HeaderSkeleton>
    )
}