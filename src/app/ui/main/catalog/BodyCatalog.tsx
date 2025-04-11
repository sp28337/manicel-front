import styles from '../../../styles/catalog.module.css';
import commonStyles from '../../../styles/common.module.css';
import Image from 'next/image';
import raspberry from "../../../../../public/raspberry-1200w.png";
import mango from "../../../../../public/mango-1200w.png";
import mint from "../../../../../public/mint-1200w.png";
import bubblegum from "../../../../../public/bubblegum-1200w.png";
import caramel from "../../../../../public/caramel-1200w.png";
import coconut from "../../../../../public/coconut-1200w.png";
import lavender from "../../../../../public/lavender-1200w.png";
import peach from "../../../../../public/peach-letual.png";
import { Icons } from '../../header/Icons';
import wbLogo from "../../../../../public/wildberries-logo.svg"
import gradient from "../../../../../public/gradient-blur.png"
import mintMango from "../../../../../public/mint-mango-500w.png"
import coconutLavender from "../../../../../public/coconut-lavender-500w.png"
import peachLavender from "../../../../../public/peach-lavender-500w.png"
import coconatPeach from "../../../../../public/coconut-peach-500w.png"


export const BodyCatalog = () => {
        
    const scrabs = [
            {
                id: 8,
                price: "348₽",
                oldPrice: "527₽",
                name: "framboise",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
                rating: "4.8",
                image: raspberry,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 1,
                price: "348₽",
                oldPrice: "527₽",
                name: "mango & chilli",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло манго, масло авокадо, экстракт красный перец, масло ши, глицерин, витамин E, твин 80, отдушка манго",
                ratio: "4.8",
                image: mango,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 5,
                price: "348₽",
                oldPrice: "527₽",
                name: "coconut pulp",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
                ratio: "4.8",
                image: coconut,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 11,
                price: "348₽",
                oldPrice: "527₽",
                name: "mint & cucumber",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
                ratio: "4.8",
                image: mint,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 2,
                price: "348₽",
                oldPrice: "527₽",
                name: "bubblegum",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
                ratio: "4.8",
                image: bubblegum,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 4,
                price: "348₽",
                oldPrice: "527₽",
                name: "vanilla caramel",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло манго, масло авокадо, экстракт красный перец, масло ши, глицерин, витамин E, твин 80, отдушка манго",
                ratio: "4.8",
                image: caramel,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 10,
                price: "348₽",
                oldPrice: "527₽",
                name: "black currant & lavender",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
                ratio: "4.8",
                image: lavender,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 7,
                price: "348₽",
                oldPrice: "527₽",
                name: "peach",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
                ratio: "4.8",
                image: peach,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 9,
                price: "348₽",
                oldPrice: "527₽",
                name: "mango & chilli + mint & cucumber",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
                ratio: "4.8",
                image: mintMango,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 3,
                price: "348₽",
                oldPrice: "527₽",
                name: "coconut pulp + black currant & lavender",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
                ratio: "4.8",
                image: coconutLavender,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id:6,
                price: "348₽",
                oldPrice: "527₽",
                name: "peach + black currant & lavender",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
                ratio: "4.8",
                image: peachLavender,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
            {
                id: 12,
                price: "348₽",
                oldPrice: "527₽",
                name: "coconut pulp + peach",
                description: "Антицеллюлитный скраб для тела солевой с маслами",
                ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
                ratio: "4.8",
                image: coconatPeach,
                imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
            },
        ]
    return (
        <div className={`${commonStyles.container} ${styles.bodyWrapper}`}>
            <p className={styles.description}>Скрабы для тела SALT BODY SCRUB от российского бренда MANICEL — это эффективное средство для очищения и ухода за кожей рук, ног, живота, ягодиц и других участков тела. Скраб мягко отшелушивает ороговевшие клетки, стимулирует обновление кожи и придаёт ей здоровый сияющий вид.</p>
            <h1 className={styles.h1Body}>каталог</h1>
            <ul className={styles.catalogList}>
                {scrabs.map((scrab, index) => (
                    <div key={index} className={styles.cardItem}>
                        {scrab.image && <Image 
                            className={styles.scrabImg} 
                            src={scrab.image} 
                            alt={scrab.imgDescription}
                            sizes="(max-width: 1248px) 100vw,
                                        1200px"
                            width={210}
                        />}
                        {scrab.name && 
                        <>
                            <div className={styles.cardContent}>                        
                                {scrab.name && <h3 className={styles.h3Body}>{scrab.name}</h3>}
                                <span className={styles.descScrab}>{scrab.description}</span>
                                <span>
                                    <div className={styles.rating}>
                                        <svg width="96" height="20" viewBox="0 0 96 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.99996 14.375L4.85671 17.5163L6.25496 11.6538L1.67871 7.73375L7.68559 7.2525L9.99996 1.6875L12.3143 7.2525L18.3221 7.73375L13.745 11.6538L15.1432 17.5163L9.99996 14.375Z" fill="#4A4A4A"/>
                                            <path d="M29 14.375L23.8567 17.5163L25.255 11.6538L20.6787 7.73375L26.6856 7.2525L29 1.6875L31.3143 7.2525L37.3221 7.73375L32.745 11.6538L34.1432 17.5163L29 14.375Z" fill="#4A4A4A"/>
                                            <path d="M48 14.375L42.8567 17.5163L44.255 11.6538L39.6787 7.73375L45.6856 7.2525L48 1.6875L50.3143 7.2525L56.3221 7.73375L51.745 11.6538L53.1432 17.5163L48 14.375Z" fill="#4A4A4A"/>
                                            <path d="M67 14.375L61.8567 17.5163L63.255 11.6538L58.6787 7.73375L64.6856 7.2525L67 1.6875L69.3143 7.2525L75.3221 7.73375L70.745 11.6538L72.1432 17.5163L67 14.375Z" fill="#4A4A4A"/>
                                            <path d="M86 14.375L80.8567 17.5163L82.255 11.6538L77.6787 7.73375L83.6856 7.2525L86 1.6875L88.3143 7.2525L94.3221 7.73375L89.745 11.6538L91.1432 17.5163L86 14.375Z" fill="#4A4A4A"/>
                                        </svg>
                                        <span className={styles.ratio}>{scrab.ratio}</span>
                                    </div>
                                </span>
                                <div className={styles.price}>{scrab.price}<span className={styles.oldPrice}>{scrab.oldPrice}</span></div>
                            </div>
                            <div className={styles.infoButtonWrapper}>                            
                                <a className={styles.infoButton} href={`/catalog/${scrab.id}`}>
                                    подробнее
                                </a>
                            </div>  
                        </>
                        }
                    </div>
                ))}
            </ul>
            <div className={styles.bottomWrapper}>
                <div className={styles.iconsWrapper}>
                    <Icons />
                </div>
                <div className={styles.partners}>
                    <Image 
                        className={styles.wbLogo}
                        priority
                        src={wbLogo}
                        alt="Wildberries logo"
                    />
                    {/* <Image 
                        className={styles.wbLogo}
                        priority
                        src={wbLogo}
                        alt="Wildberries logo"
                    />
                    <Image 
                        className={styles.wbLogo}
                        priority
                        src={wbLogo}
                        alt="Wildberries logo"
                    /> */}

                </div>
                {/* <div className={styles.gradient}>
                    <Image 
                        className={styles.gradientImage}
                        src={gradient}
                        alt="gradient"
                        width={900}
                    />
                </div> */}
            </div>
        </div>
    );
}