import styles from "../../styles/product/body.module.css"
import commonStyles from "../../styles/common.module.css"
import { ImagesSection } from "./images-section"
import { ProductSchema } from "../../lib/definitions"
import { OneSVG, TwoSVG, MarkSVG } from "../vectors"

export const Body = (props: { product: ProductSchema }) => {

    const { product } = props

    return (
        <main className={commonStyles.container}>
            <section className={styles.descriptionSection}>
                <h2 className={styles.h2}>описание</h2>
                <div className={styles.pWrapper}>
                    <p className={styles.p}>
                        <span className={styles.saltBodyScrub}>&emsp;salt body scrab</span> - {props.product.description}
                    </p>
                    <br/>
                    <p className={styles.p}>
                        &emsp;{props.product.flavor.description}
                    </p>
                </div>
            </section>
            
            <hr/>

            <ImagesSection id={product.id}/>

            <hr/>

            <section className={styles.infoSection}>
                <section className={styles.infoLine}>
                    <h3 className={styles.h3}>
                        состав:
                    </h3>
                    <ul className={styles.ingredientsWrapper}>
                        <div className={styles.ingredients}>
                            {product.flavor.ingredients.map((
                                ingredient: {name: string, description: string}, 
                                index: number
                            ) => (
                                <li className={styles.elem} key={index}>
                                    {ingredient.name}
                                </li>
                            ))}
                        </div>
                    </ul>
                </section>

                <section className={styles.infoLine}>
                    <h3 className={styles.h3}>действие:</h3>
                    <ul className={styles.ingredientsWrapper}>
                        <li className={styles.elem}>
                            против растяжек
                        </li>
                        <li className={styles.elem}>
                            коррекция фигуры
                        </li>
                        <li className={styles.elem}>
                            отшелушивание
                        </li>
                    </ul>
                </section>

                <section className={styles.infoLine}>
                    <h3 className={styles.h3}>аромат:</h3>
                    <div className={styles.ingredientsWrapper}>
                        <span className={styles.elem}>{product.flavor.name}</span>
                    </div>
                </section>

                <section className={styles.infoLine}>
                    <h3 className={styles.h3}>объем товара:</h3>
                    <div className={styles.ingredientsWrapper}>
                        <span className={styles.elem}>{product.volumes[0].volume}</span>
                    </div>
                </section>

                <section className={styles.infoLine}>
                    <h3 className={styles.h3}>комплект:</h3>
                    <div className={styles.ingredientsWrapper}>
                        <span className={styles.elem}>{product.complectation.name}</span>
                    </div>
                </section>

                <section>
                    <div className={styles.infoLine}>
                        <h3 className={styles.h3}>срок годности:</h3>
                        <div className={styles.ingredientsWrapper}>
                            <span className={styles.elem}>{product.expiration_date.before_opening}</span>
                        </div>
                        <p className={styles.pInfo}>
                            рекомендованный срок хранения и использования после вскрытия 
                            упаковки - {product.expiration_date.after_opening}
                        </p>
                    </div>
                </section>
            </section>

            <hr/>

            {product.attention && 
                <section>
                    <h2 className={styles.h2}>внимание</h2>
                    <p className={styles.pAttention}>
                        {product.attention}
                    </p>
                    <hr/>
                </section>
            }
            
            <section className={styles.usageSection}>             
                <h2 className={styles.h2}>как использовать</h2>
                <section className={styles.usageBackground}>
                    <p className={styles.pUsage}>
                        Используйте антицеллюлитный скраб во время душа, похода в баню или сауну
                    </p>
                    <div className={styles.usageLine}>
                        <div className={styles.usageIcon}>
                            <OneSVG />
                        </div>
                        <p className={styles.pUsageLine}>
                            Массажными движениями нанесите скраб на распаренную очищенную кожу, 
                            уделяя особое внимание “проблемным зонам”
                        </p>
                    </div>
                    <div className={styles.usageLine}>
                        <div className={styles.usageIcon}>
                            <TwoSVG />
                        </div>
                        <p className={styles.pUsageLine}>
                            Оставьте на {`${[1, 11, 12].includes(product.id) ? 
                            "1-2 минуты" : "3-5 минут"}`}, затем смойте теплой водой 
                        </p>
                    </div>
                    <div className={styles.usageLine}>
                        <div className={styles.usageIcon}>
                            <MarkSVG />
                        </div>
                        <p className={styles.pUsageLine}>
                            Не используйте соляной скраб ежедневно. 
                            Не подходит для проблемной и поврежденной кожи
                        </p>
                    </div>
                </section>
            </section>
        </main>
    )
}