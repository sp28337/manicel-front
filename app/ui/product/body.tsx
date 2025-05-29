import Image from "next/image"
import styles from "../../styles/product/body.module.css"
import commonStyles from "../../styles/common.module.css"
import { Description } from "./description"
import { ProductImages } from "./product-images"
import howToUseImg from "@/public/all-800w.png"
import { ProductSchema } from "../../lib/definitions"
import { OneSVG, TwoSVG, MarkSVG } from "../vectors"

export const Body = (props: { product: ProductSchema }) => {

    const { product } = props

    return (
        <div className={`${commonStyles.container}`}>
            <Description product={product} />

            <hr className={styles.hr}/>

            <section className={styles.productCard}>
                <ProductImages id={product.id}/>
                <section className={styles.info}>
                    <section className={styles.infoLine}>
                        <h3 className={`${styles.h3} ${styles.h3Sostav}`}>
                            состав:
                        </h3>
                        <ul className={styles.sostavList}>
                            {
                                product.flavor.ingredients.map((
                                    ingredient: {name: string, description: string}, 
                                    index: number
                                ) => (
                                    <li className={styles.infoItem} key={index}>
                                        {ingredient.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </section>

                    <section className={styles.infoLine}>
                        <h3 className={`${styles.h3} ${styles.h3Action}`}>действие:</h3>
                        <ul className={styles.actionList}>
                            <li className={styles.infoItem}>
                                против растяжек
                            </li>
                            <li className={styles.infoItem}>
                                коррекция фигуры
                            </li>
                            <li className={styles.infoItem}>
                                отшелушивание
                            </li>
                        </ul>
                    </section>

                    <section className={styles.infoLine}>
                        <h3 className={styles.h3}>аромат:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <span className={styles.infoItem}>{product.flavor.name}</span>
                    </section>

                    <section className={styles.infoLine}>
                        <h3 className={styles.h3}>объем товара:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <span className={styles.infoItem}>{`${product.volumes[0].volume}`}</span>
                    </section>

                    <section className={styles.infoLine}>
                        <h3 className={styles.h3}>комплект:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <span className={styles.infoItem}>{`${product.complectation.name}`}</span>
                    </section>

                    <section>
                        <div className={styles.infoLine}>
                            <h3 className={styles.h3}>срок годности:</h3>
                            <hr className={styles.hrInfoLine}/>
                            <span className={styles.infoItem}>{`${product.expiration_date.before_opening}`}</span>
                        </div>
                        <p className={styles.pInfo}>
                            рекомендованный срок хранения и использования после вскрытия 
                            упаковки - {`${product.expiration_date.after_opening}`}
                        </p>
                    </section>

                    <div className={styles.bottom}>
                        <a 
                            href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`} 
                            className={styles.chartButton}
                            target="_blank"
                            type="button"
                        >
                            купить на wb
                        </a>
                    </div>
                </section>
            </section>

            <hr className={styles.hr}/>

            {product.attention && 
                <>
                    <section className={styles.attentionWrapper}>
                        <h3 className={styles.h3Attention}>внимание</h3>
                        <p className={styles.pAttention}>
                            {product.attention}
                        </p>
                    </section>
                    <hr className={styles.hr}/>
                </>
            }
            
            <section className={styles.howToUse}>
                <div className={styles.textWrapper}>             
                    <h2 className={styles.h2}>как использовать</h2>
                    <section className={styles.howToUseDescription}>
                        <p className={styles.h4}>
                            Используйте антицеллюлитный скраб во время душа, похода в баню или сауну
                        </p>
                        <div className={`${styles.howToUseDescLine}`}>
                            <div className={styles.howToUseDiv}>
                                <OneSVG />
                            </div>
                            <p className={styles.howToUseP}>
                                Массажными движениями нанесите скраб на распаренную очищенную кожу, 
                                уделяя особое внимание “проблемным зонам”
                            </p>
                        </div>
                        <div className={styles.howToUseDescLine}>
                            <div className={styles.howToUseDiv}>
                                <TwoSVG />
                            </div>
                            <p className={styles.howToUseP}>
                                Оставьте на {`${[1, 11, 12].includes(product.id) ? 
                                "1-2 минуты" : "3-5 минут"}`}, затем смойте теплой водой 
                            </p>
                        </div>
                        <div className={styles.howToUseDescLine}>
                            <div className={styles.howToUseDiv}>
                                <MarkSVG />
                            </div>
                            <p className={styles.howToUseP}>
                                Не используйте соляной скраб ежедневно. 
                                Не подходит для проблемной и поврежденной кожи
                            </p>
                        </div>
                    </section>
                </div>
                <div className={styles.howToUseImgWrapper}>
                    <Image 
                        className={styles.howToUseImage}
                        src={howToUseImg} 
                        alt="how to use scrub"
                        width={450}
                        sizes="100vw"
                    />
                </div>
            </section>
        </div>
    )
}