import Image from "next/image";
import { UrlPath } from "./UrlPath";
import { Description } from "./Description";
import commonStyles from '../../../../styles/common.module.css';
import styles from '../../../../styles/body-id.module.css';

import mangoPocket from "../../../../../../public/mango-pocket.jpg";
import mangoPocket1 from "../../../../../../public/mango-pocket-1.jpg";
import mangoPocket2 from "../../../../../../public/mango-pocket-2.jpg";
import lavenderPocket from "../../../../../../public/lavender-pocket.jpg";
import lavenderPocket1 from "../../../../../../public/lavender-pocket-1.jpg";
import lavenderPocket2 from "../../../../../../public/lavender-pocket-2.jpg";
import coconutPocket from "../../../../../../public/coconut-pocket.jpg";
import coconutPocket1 from "../../../../../../public/coconut-pocket-1.jpg";
import coconutPocket2 from "../../../../../../public/coconut-pocket-2.jpg";
import mintPocket from "../../../../../../public/mint-pocket.jpg";
import mintPocket1 from "../../../../../../public/mint-pocket-1.jpg";
import mintPocket2 from "../../../../../../public/mint-pocket-2.jpg";
import peachPocket from "../../../../../../public/peach-pocket.jpg";
import peachPocket1 from "../../../../../../public/peach-pocket-1.jpg";
import peachPocket2 from "../../../../../../public/peach-pocket-2.jpg";
import inzhirPocket from "../../../../../../public/inzhir-pocket-680w.png";
import citrusPocket from "../../../../../../public/citrus-pocket-680w.png";
import applePocket from "../../../../../../public/apple-pocket-680w.png";

import howToUseImg from "../../../../../../public/all-1200w.png";

const pocketImages = [
    [],
    [mangoPocket, 
    mangoPocket1, 
    mangoPocket2,],
    [],
    [inzhirPocket,
    inzhirPocket,
    inzhirPocket],
    [],
    [coconutPocket,
    coconutPocket1,
    coconutPocket2,],
    [citrusPocket,
    citrusPocket,
    citrusPocket],
    [],
    [peachPocket,
    peachPocket1,
    peachPocket2,],
    [applePocket,
    applePocket,
    applePocket],
    [lavenderPocket, 
    lavenderPocket1, 
    lavenderPocket2,],
    [mintPocket,
    mintPocket1,
    mintPocket2,],
    [],
    [],
    [],
    [],
    [],  
]

export const BodyId = (props: { product: any }) => {

    return (
        <div className={`${styles.bodyWrapper} ${commonStyles.container}`}>
            <UrlPath name={props.product.name} />
            <Description product={props.product} />
            <hr className={styles.hr}/>
            <div className={styles.productCard}>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgSlider}>
                        <div className={styles.imgSliderItem}>
                            <Image 
                                className={`${styles.scrubPhotoMini}`}
                                src={pocketImages[props.product.id][0]} 
                                alt="scrub photo"
                                width={81}
                                sizes="100vw"
                            />
                        </div>
                        <div className={styles.imgSliderItem}>
                            <Image 
                                className={`${styles.scrubPhotoMini}`}
                                src={pocketImages[props.product.id][1]} 
                                alt="scrub photo"
                                width={81}
                                sizes="100vw"
                            />
                        </div>
                        <div className={styles.imgSliderItem}>
                            <Image 
                                className={`${styles.scrubPhotoMini}`}
                                src={pocketImages[props.product.id][2]} 
                                alt="scrub photo"
                                width={81}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                    <Image 
                        className={`${styles.scrubPhoto}`}
                        src={pocketImages[props.product.id][0]} 
                        alt="scrub photo"
                        width={520}
                        sizes="100vw"
                    />
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.infoLine}>
                        <h3 className={styles.h3}>состав:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <ul className={styles.infoList}>
                            {
                                props.product.flavor.ingredients.map((
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
                        <span className={styles.infoItem}>{props.product.flavor.name}</span>
                    </div>
                    <div className={styles.infoLine}>
                        <h3 className={styles.h3}>объем товара:</h3>
                        <hr className={styles.hrInfoLine}/>
                        <span className={styles.infoItem}>{`${props.product.volumes[0].volume}`}</span>
                    </div>
                    <div>
                        <div className={styles.infoLine}>
                            <h3 className={styles.h3}>срок годности:</h3>
                            <hr className={styles.hrInfoLine}/>
                            <span className={styles.infoItem}>{`${props.product.expiration_date.before_opening}`}</span>
                        </div>
                        <p className={styles.pInfo}>рекомендованный срок хранения и использования после вскрытия упаковки - {`${props.product.expiration_date.after_opening}`}</p>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>358 ₽</span>
                            <span className={styles.oldPrice}>527 ₽</span>
                        </div>
                        <a 
                            href={`https://www.wildberries.ru/catalog/${props.product.articule.toString()}/detail.aspx`} 
                            className={styles.chartButton}
                        >
                            купить на wb
                        </a>
                    </div>
                </div>
            </div>
            <hr className={styles.hr}/>
            {props.product.attention && 
                <>
                    <div className={styles.attentionWrapper}>
                        <h3 className={styles.h3Attention}>внимание</h3>
                        <p className={styles.pAttention}>
                            {props.product.attention}
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
                                <svg width="41" height="53" viewBox="0 0 27 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-outside-1_2861_1611" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="53" fill="black">
                                    <rect fill="white" width="27" height="53"/>
                                    <path d="M25.294 1.09091V52H13.0142V12.5753H12.7159L1.33097 19.5355V8.89631L13.8842 1.09091H25.294Z"/>
                                    </mask>
                                    <path d="M25.294 1.09091H26.294V0.0909076H25.294V1.09091ZM25.294 52V53H26.294V52H25.294ZM13.0142 52H12.0142V53H13.0142V52ZM13.0142 12.5753H14.0142V11.5753H13.0142V12.5753ZM12.7159 12.5753V11.5753H12.4344L12.1943 11.7221L12.7159 12.5753ZM1.33097 19.5355H0.330966V21.3189L1.85257 20.3887L1.33097 19.5355ZM1.33097 8.89631L0.802934 8.04708L0.330966 8.34054V8.89631H1.33097ZM13.8842 1.09091V0.0909076H13.5987L13.3562 0.241683L13.8842 1.09091ZM24.294 1.09091V52H26.294V1.09091H24.294ZM25.294 51H13.0142V53H25.294V51ZM14.0142 52V12.5753H12.0142V52H14.0142ZM13.0142 11.5753H12.7159V13.5753H13.0142V11.5753ZM12.1943 11.7221L0.809365 18.6823L1.85257 20.3887L13.2375 13.4285L12.1943 11.7221ZM2.33097 19.5355V8.89631H0.330966V19.5355H2.33097ZM1.859 9.74553L14.4123 1.94013L13.3562 0.241683L0.802934 8.04708L1.859 9.74553ZM13.8842 2.09091H25.294V0.0909076H13.8842V2.09091Z" fill="black" mask="url(#path-1-outside-1_2861_1611)"/>
                                </svg>
                            </div>
                            <p className={styles.howToUseP}>
                                Массажными движениями нанесите скраб на распаренную очищенную кожу, уделяя особое внимание “проблемным зонам”
                            </p>
                        </div>
                        <div className={styles.howToUseDescLine}>
                            <div className={styles.howToUseDiv}>
                                <svg width="41" height="54" viewBox="0 0 41 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-outside-1_2861_1612" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="54" fill="black">
                                    <rect fill="white" width="41" height="54"/>
                                    <path d="M1.75355 53V44.1506L20.3224 27.8935C21.7145 26.634 22.8994 25.4822 23.8771 24.4382C24.8549 23.3776 25.6006 22.317 26.1143 21.2564C26.6281 20.1792 26.8849 19.0109 26.8849 17.7514C26.8849 16.3428 26.5784 15.1413 25.9652 14.147C25.352 13.1361 24.5069 12.3572 23.4297 11.8104C22.3525 11.2635 21.1179 10.9901 19.7259 10.9901C18.3172 10.9901 17.0826 11.2801 16.022 11.8601C14.9614 12.4235 14.1328 13.2438 13.5362 14.321C12.9562 15.3982 12.6662 16.7074 12.6662 18.2486H1.00781C1.00781 14.785 1.7867 11.7938 3.34446 9.27486C4.90223 6.75592 7.08973 4.817 9.90696 3.4581C12.7408 2.08262 16.0303 1.39488 19.7756 1.39488C23.6368 1.39488 26.9927 2.04119 29.843 3.33381C32.6934 4.62642 34.8975 6.43276 36.4553 8.75284C38.0296 11.0563 38.8168 13.7327 38.8168 16.782C38.8168 18.7209 38.4273 20.6432 37.6484 22.549C36.8696 24.4548 35.4692 26.5594 33.4474 28.8629C31.4422 31.1664 28.5919 33.9257 24.8963 37.1406L18.8061 42.7585V43.0817H39.4382V53H1.75355Z"/>
                                    </mask>
                                    <path d="M1.75355 53H0.753551V54H1.75355V53ZM1.75355 44.1506L1.09483 43.3982L0.753551 43.697V44.1506H1.75355ZM20.3224 27.8935L20.9812 28.6459L20.9873 28.6405L20.9934 28.635L20.3224 27.8935ZM23.8771 24.4382L24.6071 25.1218L24.6124 25.116L23.8771 24.4382ZM26.1143 21.2564L27.0143 21.6923L27.017 21.6869L26.1143 21.2564ZM25.9652 14.147L25.1102 14.6656L25.114 14.6719L25.9652 14.147ZM23.4297 11.8104L22.977 12.702L22.977 12.702L23.4297 11.8104ZM16.022 11.8601L16.4912 12.7433L16.5018 12.7375L16.022 11.8601ZM13.5362 14.321L12.6614 13.8365L12.6558 13.8469L13.5362 14.321ZM12.6662 18.2486V19.2486H13.6662V18.2486H12.6662ZM1.00781 18.2486H0.0078125V19.2486H1.00781V18.2486ZM3.34446 9.27486L4.19496 9.80083L4.19496 9.80083L3.34446 9.27486ZM9.90696 3.4581L10.3414 4.35879L10.3436 4.35772L9.90696 3.4581ZM29.843 3.33381L30.256 2.42308L30.256 2.42308L29.843 3.33381ZM36.4553 8.75284L35.625 9.31029L35.6297 9.3171L36.4553 8.75284ZM37.6484 22.549L36.7228 22.1707L36.7228 22.1707L37.6484 22.549ZM33.4474 28.8629L32.6959 28.2033L32.6932 28.2063L33.4474 28.8629ZM24.8963 37.1406L24.24 36.3862L24.229 36.3957L24.2183 36.4056L24.8963 37.1406ZM18.8061 42.7585L18.1281 42.0235L17.8061 42.3205V42.7585H18.8061ZM18.8061 43.0817H17.8061V44.0817H18.8061V43.0817ZM39.4382 43.0817H40.4382V42.0817H39.4382V43.0817ZM39.4382 53V54H40.4382V53H39.4382ZM2.75355 53V44.1506H0.753551V53H2.75355ZM2.41227 44.903L20.9812 28.6459L19.6637 27.1411L1.09483 43.3982L2.41227 44.903ZM20.9934 28.635C22.3999 27.3624 23.6057 26.191 24.607 25.1218L23.1472 23.7547C22.1931 24.7735 21.029 25.9056 19.6515 27.1519L20.9934 28.635ZM24.6124 25.116C25.6423 23.9988 26.4495 22.8584 27.0143 21.6923L25.2144 20.8205C24.7517 21.7756 24.0675 22.7564 23.1419 23.7604L24.6124 25.116ZM27.017 21.6869C27.5983 20.4678 27.8849 19.1514 27.8849 17.7514H25.8849C25.8849 18.8704 25.6578 19.8906 25.2117 20.8259L27.017 21.6869ZM27.8849 17.7514C27.8849 16.1958 27.5452 14.804 26.8164 13.6221L25.114 14.6719C25.6115 15.4787 25.8849 16.4898 25.8849 17.7514H27.8849ZM26.8202 13.6284C26.1081 12.4545 25.122 11.548 23.8824 10.9187L22.977 12.702C23.8917 13.1664 24.5959 13.8178 25.1102 14.6656L26.8202 13.6284ZM23.8824 10.9187C22.645 10.2905 21.2512 9.99006 19.7259 9.99006V11.9901C20.9846 11.9901 22.0601 12.2365 22.977 12.702L23.8824 10.9187ZM19.7259 9.99006C18.1774 9.99006 16.7726 10.3098 15.5422 10.9827L16.5018 12.7375C17.3927 12.2503 18.4571 11.9901 19.7259 11.9901V9.99006ZM15.5529 10.977C14.3168 11.6336 13.3493 12.5945 12.6614 13.8365L14.411 14.8055C14.9163 13.8931 15.606 13.2134 16.4912 12.7432L15.5529 10.977ZM12.6558 13.8469C11.9795 15.1029 11.6662 16.584 11.6662 18.2486H13.6662C13.6662 16.8308 13.9329 15.6935 14.4167 14.7951L12.6558 13.8469ZM12.6662 17.2486H1.00781V19.2486H12.6662V17.2486ZM2.00781 18.2486C2.00781 14.9389 2.75048 12.1366 4.19496 9.80083L2.49396 8.74889C0.822914 11.451 0.0078125 14.6312 0.0078125 18.2486H2.00781ZM4.19496 9.80083C5.64683 7.45314 7.68563 5.63982 10.3414 4.35879L9.47251 2.5574C6.49382 3.99418 4.15763 6.0587 2.49396 8.74889L4.19496 9.80083ZM10.3436 4.35772C13.018 3.05964 16.1533 2.39488 19.7756 2.39488V0.394884C15.9073 0.394884 12.4636 1.1056 9.4703 2.55847L10.3436 4.35772ZM19.7756 2.39488C23.5268 2.39488 26.736 3.02283 29.43 4.24453L30.256 2.42308C27.2493 1.05956 23.7468 0.394884 19.7756 0.394884V2.39488ZM29.43 4.24453C32.1321 5.46989 34.1829 7.16241 35.625 9.31027L37.2855 8.1954C35.6121 5.70312 33.2547 3.78295 30.256 2.42308L29.43 4.24453ZM35.6297 9.3171C37.0798 11.4389 37.8168 13.9145 37.8168 16.782H39.8168C39.8168 13.5509 38.9794 10.6738 37.2809 8.18858L35.6297 9.3171ZM37.8168 16.782C37.8168 18.5833 37.4556 20.3775 36.7228 22.1707L38.5741 22.9273C39.399 20.909 39.8168 18.8585 39.8168 16.782H37.8168ZM36.7228 22.1707C36.0011 23.9365 34.6766 25.9465 32.6959 28.2033L34.199 29.5226C36.2618 27.1723 37.738 24.973 38.5741 22.9273L36.7228 22.1707ZM32.6932 28.2063C30.7308 30.4607 27.9188 33.1858 24.24 36.3862L25.5527 37.8951C29.265 34.6655 32.1537 31.8722 34.2017 29.5195L32.6932 28.2063ZM24.2183 36.4056L18.1281 42.0235L19.4841 43.4936L25.5743 37.8757L24.2183 36.4056ZM17.8061 42.7585V43.0817H19.8061V42.7585H17.8061ZM18.8061 44.0817H39.4382V42.0817H18.8061V44.0817ZM38.4382 43.0817V53H40.4382V43.0817H38.4382ZM39.4382 52H1.75355V54H39.4382V52Z" fill="black" mask="url(#path-1-outside-1_2861_1612)"/>
                                </svg>
                            </div>
                            <p className={styles.howToUseP}>
                                Оставьте на оставьте на {`${props.product.id in [1, 11] ? "1-2 минуты" : "3-5 минут"}`}, затем смойте теплой водой 
                            </p>
                        </div>
                        <div className={styles.howToUseDescLine}>
                            <div className={styles.howToUseDiv}>
                                <svg width="41" height="54" viewBox="0 0 16 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-outside-1_2861_1613" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="54" fill="black">
                                    <rect fill="white" width="16" height="54"/>
                                    <path d="M14.1463 1.09091L13.0028 36.4141H2.78622L1.64276 1.09091H14.1463ZM7.8821 52.7209C6.1089 52.7209 4.58428 52.0911 3.30824 50.8317C2.04877 49.5722 1.41903 48.0476 1.41903 46.2578C1.41903 44.5012 2.04877 43.0014 3.30824 41.7585C4.58428 40.4991 6.1089 39.8693 7.8821 39.8693C9.58902 39.8693 11.0888 40.4991 12.3814 41.7585C13.6906 43.0014 14.3452 44.5012 14.3452 46.2578C14.3452 47.451 14.0386 48.5365 13.4254 49.5142C12.8288 50.492 12.0417 51.2708 11.0639 51.8509C10.1027 52.4309 9.04214 52.7209 7.8821 52.7209Z"/>
                                    </mask>
                                    <path d="M14.1463 1.09091L15.1458 1.12326L15.1792 0.0909076H14.1463V1.09091ZM13.0028 36.4141V37.4141H13.971L14.0023 36.4464L13.0028 36.4141ZM2.78622 36.4141L1.78675 36.4464L1.81807 37.4141H2.78622V36.4141ZM1.64276 1.09091V0.0909076H0.60986L0.643279 1.12326L1.64276 1.09091ZM3.30824 50.8317L2.60112 51.5388L2.60577 51.5434L3.30824 50.8317ZM3.30824 41.7585L4.01065 42.4703L4.01071 42.4702L3.30824 41.7585ZM12.3814 41.7585L11.6835 42.4748L11.6929 42.4838L12.3814 41.7585ZM13.4254 49.5142L12.5782 48.9829L12.5718 48.9933L13.4254 49.5142ZM11.0639 51.8509L10.5537 50.9908L10.5473 50.9947L11.0639 51.8509ZM13.1468 1.05855L12.0034 36.3817L14.0023 36.4464L15.1458 1.12326L13.1468 1.05855ZM13.0028 35.4141H2.78622V37.4141H13.0028V35.4141ZM3.7857 36.3817L2.64223 1.05855L0.643279 1.12326L1.78675 36.4464L3.7857 36.3817ZM1.64276 2.09091H14.1463V0.0909076H1.64276V2.09091ZM7.8821 51.7209C6.37511 51.7209 5.10194 51.197 4.01071 50.12L2.60577 51.5434C4.06662 52.9853 5.84269 53.7209 7.8821 53.7209V51.7209ZM4.01535 50.1246C2.94443 49.0537 2.41903 47.7838 2.41903 46.2578H0.419034C0.419034 48.3114 1.15311 50.0908 2.60113 51.5388L4.01535 50.1246ZM2.41903 46.2578C2.41903 44.7709 2.94002 43.5268 4.01065 42.4703L2.60583 41.0467C1.15752 42.476 0.419034 44.2315 0.419034 46.2578H2.41903ZM4.01071 42.4702C5.10194 41.3932 6.37511 40.8693 7.8821 40.8693V38.8693C5.84269 38.8693 4.06662 39.6049 2.60577 41.0468L4.01071 42.4702ZM7.8821 40.8693C9.31222 40.8693 10.5658 41.3857 11.6835 42.4748L13.0793 41.0423C11.6117 39.6124 9.86581 38.8693 7.8821 38.8693V40.8693ZM11.6929 42.4838C12.8094 43.5437 13.3452 44.7839 13.3452 46.2578H15.3452C15.3452 44.2185 14.5718 42.4591 13.0699 41.0333L11.6929 42.4838ZM13.3452 46.2578C13.3452 47.2698 13.0881 48.17 12.5782 48.9829L14.2726 50.0455C14.9891 48.9029 15.3452 47.6322 15.3452 46.2578H13.3452ZM12.5718 48.9933C12.0596 49.8328 11.3899 50.4948 10.5537 50.9908L11.5741 52.7109C12.6934 52.0469 13.5981 51.1511 14.2791 50.0351L12.5718 48.9933ZM10.5473 50.9947C9.74736 51.4774 8.8664 51.7209 7.8821 51.7209V53.7209C9.21788 53.7209 10.4581 53.3844 11.5806 52.707L10.5473 50.9947Z" fill="black" mask="url(#path-1-outside-1_2861_1613)"/>
                                </svg>
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