import Image from "next/image"
import { UrlPath } from "./UrlPath"
import { Description } from "./Description"
import commonStyles from "../../../../styles/common.module.css"
import styles from "../../../../styles/body-id.module.css"
import { ProductImages } from "./ProductImages"
import howToUseImg from "@/public/all-800w.png"
import { ProductSchema } from "../../../../lib/definitions"
import { OneSVG, TwoSVG, MarkSVG } from "../../../vectors"

export const Body = (props: { product: ProductSchema }) => {

    const { product } = props

    return (
        <div className={`${styles.bodyWrapper} ${commonStyles.container}`}>
            
            <UrlPath name={props.product.name} />
            <Description product={props.product} />

            <hr className={styles.hr}/>

            <div className={styles.productCard}>
                <ProductImages id={props.product.id}/>
                <div className={styles.infoWrapper}>
                    
                    <div className={styles.infoLine}>
                        <h3 className={styles.h3}>состав:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <ul className={styles.infoList}>
                            {
                                product.flavor.ingredients.map((
                                    ingredient: {name: string, description: string}, 
                                    index: number
                                ) => (<li className={styles.infoItem} key={index}>
                                        {ingredient.name}
                                      </li>
                                      ))
                            }
                        </ul>
                    </div>

                    <div className={styles.infoLine}>
                        <h3 className={styles.h3}>действие:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <ul className={styles.infoList}>
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
                    </div>

                    <div className={styles.infoLine}>
                        <h3 className={styles.h3}>аромат:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <span className={styles.infoItem}>{product.flavor.name}</span>
                    </div>

                    <div className={styles.infoLine}>
                        <h3 className={styles.h3}>объем товара:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <span className={styles.infoItem}>{`${product.volumes[0].volume}`}</span>
                    </div>

                    <div>
                        <div className={styles.infoLine}>
                            <h3 className={styles.h3}>срок годности:</h3>
                            <hr className={styles.hrInfoLine}/>
                            <span className={styles.infoItem}>{`${product.expiration_date.before_opening}`}</span>
                        </div>
                        <p className={styles.pInfo}>рекомендованный срок хранения и использования после вскрытия упаковки - {`${props.product.expiration_date.after_opening}`}</p>
                    </div>

                    <div className={styles.bottom}>
                        {/* <div className={styles.priceWrapper}>
                            <span className={styles.price}>358 ₽</span>
                            <span className={styles.oldPrice}>527 ₽</span>
                        </div> */}
                        <a 
                            href={`https://www.wildberries.ru/catalog/${props.product.articule.toString()}/detail.aspx`} 
                            className={styles.chartButton}
                            target="_blank"
                        >
                            купить на wb
                        </a>
                    </div>
                    
                </div>
            </div>
            <hr className={styles.hr}/>
            {product.attention && 
                <>
                    <div className={styles.attentionWrapper}>
                        <h3 className={styles.h3Attention}>внимание</h3>
                        <p className={styles.pAttention}>
                            {product.attention}
                        </p>
                    </div>
                    <hr className={styles.hr}/>
                </>
            }
            <div className={styles.howToUse}>
                <div className={styles.howToUseText}>
                    <h2 className={styles.h2}>как использовать</h2>
                    <div className={styles.howToUseDescription}>
                        <h4 className={styles.h4}>Используйте антицеллюлитный скраб во время душа, похода в баню или сауну</h4>
                        <div className={`${styles.howToUseDescLine}`}>
                            <div className={styles.howToUseDiv}>
                                <OneSVG />
                            </div>
                            <p className={styles.howToUseP}>
                                Массажными движениями нанесите скраб на распаренную очищенную кожу, уделяя особое внимание “проблемным зонам”
                            </p>
                        </div>
                        <div className={styles.howToUseDescLine}>
                            <div className={styles.howToUseDiv}>
                                <TwoSVG />
                            </div>
                            <p className={styles.howToUseP}>
                                Оставьте на оставьте на {`${[1, 11, 12].includes(props.product.id) ? "1-2 минуты" : "3-5 минут"}`}, затем смойте теплой водой 
                            </p>
                        </div>
                        <div className={styles.howToUseDescLine}>
                            <div className={styles.howToUseDiv}>
                                <MarkSVG />
                            </div>
                            <p className={styles.howToUseP}>
                                Не используйте соляной скраб ежедневно. Не подходит для проблемной и поврежденной кожи
                            </p>
                        </div>
                    </div>
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
            </div>
        </div>
    )
}