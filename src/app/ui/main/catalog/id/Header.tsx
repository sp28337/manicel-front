import React from 'react';
import Image from 'next/image';
import commonStyles from '../../../../styles/common.module.css';
import styles from '../../../../styles/header-id.module.css';
import { StaticImageData } from "next/image";

import { Wave } from '@/app/ui/header/Wave';
import { Lavender } from './elements/Lavender';
import { Inzhir } from './elements/Inzhir';
import { Mango } from './elements/Mango';
import { Bubblegum } from './elements/Bubblegum';
import { Caramel } from './elements/Caramel';
import { Coconut } from './elements/Coconut';
import { Citrus } from './elements/Citrus';
import { Raspberry } from './elements/Raspberry';
import { Peach } from './elements/Peach';
import { Apple } from './elements/Apple';
import { Mint } from './elements/Mint';
import { MintMango } from './elements/MintMango';
import { LavenderCoconut } from './elements/LavenderCoconut';
import { LavenderPeach } from './elements/LavenderPeach';
import { PeachCoconut } from './elements/PeachCoconut';
import { Trio } from './elements/Trio';

import background from "../../../../../../public/salt-body-scrub-1140w.png";

import raspberryImg from "../../../../../../public/raspberry/raspberry-main-1200w.png";
import caramelImg from "../../../../../../public/caramel/caramel-main-1200w-1.png";
import mangoImg from "../../../../../../public/mango/mango-main-1200w.png";
import mintImg from "../../../../../../public/mint/mint-main-1200w.png";
import lavenderImg from "../../../../../../public/lavender/lavender-main-1200w.png";
import bubblegumImg from "../../../../../../public/bubblegum/bubblegum-main-1200w.png";
import coconutImg from "../../../../../../public/coconut/coconut-main-1200w.png";
import ingirImg from "../../../../../../public/inzhir/inzhir-main-790w.png";
import appleImg from "../../../../../../public/apple/apple-main-790w.png";
import citrusImg from "../../../../../../public/citrus/citrus-main-790w.png";

import trioImg from "../../../../../../public/trio.png";
import peachLavenderImg from "../../../../../../public/lavender-peach-1200w-1.png";
import coconutPeachImg from "../../../../../../public/peach-coconut-1200w-1.png";
import coconutLavenderImg from "../../../../../../public/lavender-coconut-1200w-1.png";
import mintMangoImg from "../../../../../../public/mango-chilli-1200w-1.png";

interface Data {
    id: number,
    name: string,
    note: string,
    category: {
        name: string,
    },
    effects: [
        {
            description: string
        },
    ],
}

export const Header = (props: { product: Data}) => {

    const { product } = props

    const backgroundElements: {[key: number]: React.ReactElement} = {
        1: <Mango />,
        2: <Bubblegum />,
        3: <Inzhir />,
        4: <Caramel />,
        5: <Coconut />,
        6: <Citrus />,
        7: <Raspberry />,
        8: <Peach />,
        9: <Apple />,
        10: <Lavender />,
        11: <Mint />,
        12: <MintMango />,
        13: <LavenderCoconut />,
        14: <PeachCoconut />,
        15: <LavenderPeach />,
        16: <Trio />,
    }

    const mainImages: {[key: number]: StaticImageData} = {
        1: mangoImg,
        2: bubblegumImg,
        3: ingirImg,
        4: caramelImg,
        5: coconutImg,
        6: citrusImg,
        7: raspberryImg,
        8: mangoImg,
        9: appleImg,
        10: lavenderImg,
        11: mintImg,
        12: mintMangoImg,
        13: coconutLavenderImg,
        14: coconutPeachImg,
        15: peachLavenderImg,
        16: trioImg
    }

    const handleH1SetsName = (name: string): React.ReactElement => {
        const splitNames = name.split("+")

        if (splitNames.length === 2) {
            return (
                <div className={styles.h1Sets}>
                    <div>{splitNames[0].trim()}</div>
                    <div className={styles.plus}>+</div>
                    <div>{splitNames[1].trim()}</div>
                </div>
            )
        } else {
            return (
                <div className={styles.h1Sets}>
                    <div>{splitNames[0].trim()}</div>
                    <div style={{marginLeft: "-33%"}} className={styles.plus}>+</div>
                    <div style={{textAlign: "center"}}>{splitNames[1].trim()}</div>
                    <div style={{marginLeft: "33%"}} className={styles.plus}>+</div>
                    <div style={{textAlign: "right"}}>{splitNames[2].trim()}</div>
                </div>
            )
        }
    }

    const checkId = (productId: number): number => {
        const setsId = [12, 13, 14, 15, 16]
        const pocketsId = [3, 6, 9]
        
        for (const id of setsId) {
            if (id === productId) {
                return 1
            }
        }

        for (const id of pocketsId) {
            if (id === productId) {
                return 2
            }
        }

        return 0
    }

    return (

        <header className={styles.header}>
            <div className={styles.background}>

                <Image 
                    className={styles.backgroundText}
                    src={background} 
                    alt="salt body scrub written with beautiful font on background"
                    quality={100}
                    sizes="100vw"
                />

                <>
                    {checkId(product.id) === 0 &&  backgroundElements[product.id]}
                    {checkId(product.id) === 2 &&  backgroundElements[product.id]}
                </>

                {/* {product.id === 2 && 
                    <>
                        <Image
                            className={styles.bubble1}
                            alt="bubble 1"
                            src={bubble1}
                            quality={100}
                            sizes="100vw"
                        />
                        <Image
                            className={styles.bubble2}
                            alt="bubble 2"
                            src={bubble2}
                            quality={100}
                            sizes="100vw"
                        />
                    </>
                } */}

                <div className={`${styles.content} ${commonStyles.container}`}>
                    <div className={styles.wrapper}>
                        <div className={
                            checkId(product.id) === 1      ? 
                            `${styles.imgSetsWrapper}`     : 
                            `${styles.imgDefaultWrapper}`
                            }>
                            <Image 
                                className={`${styles.mainImg}`}
                                src={mainImages[product.id]} 
                                alt={product.category.name}
                                sizes="100vw"
                                priority
                            />
                            <p className={styles.note}>
                                {product.note}
                            </p>
                        </div>

                        <div className={
                            checkId(product.id) === 1      ? 
                            `${styles.textSets}`           : 
                            checkId(product.id) === 2      ?
                            `${styles.textPockets}`        : 
                            `${styles.text}`
                            }>

                            <h1 className={styles.h1Wrapper}>
                               {    
                                    checkId(product.id) === 1         ? 
                                    handleH1SetsName(product.name)    : 
                                    <span className={`${styles.h1}`}>
                                        {product.name}
                                    </span> 
                                }
                                <span className={styles.span}>
                                    {product.category.name}
                                </span>
                            </h1>

                            <ul className={styles.list}>
                                
                                {product.effects.map((item, index) => (
                                    <li key={index} className={
                                        checkId(product.id) === 1      ? 
                                        `${styles.listSetsItem}`       : 
                                        `${styles.listItem}`
                                        }
                                    >
                                        <span className={styles.liItemWrapper}>
                                            <svg 
                                                width="22" 
                                                height="26" 
                                                viewBox="0 0 22 26" 
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M20.9234 0.886361C21.1682 0.886319 21.3665 0.687917 21.3665 0.44318C21.3665 0.198419 21.1681 0 20.9234 0V0.44318C20.9234 0 20.9235 -8.93268e-08 20.9234 0L20.9205 3.54656e-06L20.9137 2.27393e-05L20.8881 0.000170142C20.8659 0.000336379 20.8333 0.00066495 20.7909 0.00131428C20.7061 0.00261292 20.582 0.00519493 20.4229 0.0103289C20.1046 0.0205956 19.6457 0.0410752 19.0795 0.0819376C17.9477 0.163617 16.3837 0.326966 14.6549 0.654029C11.2182 1.30422 7.0435 2.61678 4.36004 5.30024C1.66014 8.00014 1.26506 10.916 1.55641 13.1496C1.70121 14.2597 2.01444 15.1987 2.29101 15.86C2.42952 16.1912 2.5595 16.4544 2.65587 16.6365C2.70409 16.7275 2.74396 16.7984 2.77239 16.8475C2.78661 16.8721 2.79797 16.8912 2.80608 16.9047L2.81578 16.9207L2.81872 16.9254L2.81969 16.927C2.81979 16.9271 2.82024 16.9279 2.93362 16.8571L2.82033 16.928C2.83852 16.9571 2.85954 16.9834 2.8828 17.0067C2.57231 17.9245 2.2876 18.8394 2.03235 19.7073C1.56829 21.2851 1.19722 22.723 0.942147 23.7665C0.814578 24.2884 0.715942 24.7119 0.64912 25.0053C0.615707 25.1521 0.590244 25.2663 0.57309 25.344L0.553634 25.4328L0.548664 25.4557L0.547045 25.4632C0.54702 25.4634 0.54691 25.4639 0.980253 25.5567L0.547045 25.4632C0.49576 25.7026 0.648065 25.9388 0.887393 25.9901C1.12672 26.0414 1.36231 25.8889 1.4136 25.6496L1.41508 25.6427L1.41976 25.6211L1.43863 25.535C1.45538 25.4591 1.48041 25.3468 1.51336 25.2021C1.57926 24.9127 1.67682 24.4938 1.80316 23.977C2.0559 22.943 2.42346 21.5188 2.88269 19.9574C3.80644 16.8166 5.08371 13.1835 6.51944 11.0299C7.95282 8.87981 9.74705 7.44318 11.1867 6.54341C11.9058 6.09393 12.534 5.77999 12.9803 5.5792C13.2033 5.47884 13.3805 5.40689 13.5005 5.36051C13.5606 5.33732 13.6062 5.32054 13.6362 5.30981L13.669 5.29821L13.6763 5.29573L13.6774 5.29534C13.9094 5.21781 14.0348 4.96692 13.9575 4.73484C13.8801 4.50263 13.6291 4.37714 13.3969 4.45454L13.5253 4.83987C13.3969 4.45455 13.3971 4.45449 13.3969 4.45454L13.3949 4.4552L13.3913 4.45641L13.3794 4.4605C13.3694 4.46398 13.3551 4.46896 13.3369 4.4755C13.3005 4.48857 13.248 4.50785 13.1811 4.53372C13.0472 4.58544 12.8552 4.66352 12.6165 4.77091C12.1394 4.98559 11.475 5.31795 10.7169 5.79177C9.20203 6.73858 7.30309 8.25649 5.78194 10.5382C4.85388 11.9303 4.00454 13.8731 3.2737 15.8897C3.222 15.7799 3.16628 15.6556 3.10874 15.5181C2.85442 14.9099 2.56751 14.0484 2.43532 13.035C2.17269 11.0214 2.51625 8.39753 4.98679 5.92699C7.47376 3.44002 11.424 2.16736 14.8197 1.52494C16.5071 1.2057 18.0361 1.0459 19.1433 0.965999C19.6966 0.926073 20.1436 0.906159 20.4515 0.896229C20.6054 0.891264 20.7244 0.888797 20.8045 0.887571C20.8445 0.886958 20.8747 0.886655 20.8947 0.886506L20.9169 0.886377L20.9221 0.886362L20.9234 0.886361Z" fill="black" />
                                                <path d="M20.3151 2.23548C20.549 2.30746 20.6803 2.55546 20.6083 2.7894L20.1848 2.65906C20.6083 2.7894 20.6084 2.78927 20.6083 2.7894L20.6077 2.79159L20.6059 2.79726L20.5992 2.81883L20.5731 2.90164C20.5502 2.97398 20.5162 3.07994 20.4717 3.21554C20.3828 3.48671 20.2518 3.87658 20.0832 4.35334C19.7462 5.30641 19.2577 6.60896 18.6525 8.00571C18.0477 9.4013 17.3232 10.8981 16.513 12.2369C15.7064 13.5694 14.7972 14.7752 13.8139 15.5619C11.8757 17.1124 9.92651 17.5056 8.45895 17.5056C7.72751 17.5056 7.11694 17.4081 6.68673 17.3098C6.47141 17.2606 6.30058 17.211 6.18155 17.1729C6.12201 17.1539 6.07536 17.1377 6.0425 17.1258C6.02607 17.1198 6.01309 17.115 6.00365 17.1114L5.99218 17.107L5.98847 17.1055L5.98713 17.105C5.98689 17.1049 5.98612 17.1046 6.15072 16.6931L5.98612 17.1046C5.75887 17.0137 5.64833 16.7558 5.73923 16.5285C5.83001 16.3016 6.08736 16.191 6.31439 16.2813L6.31919 16.2831L6.34368 16.2922C6.36673 16.3005 6.40303 16.3131 6.45169 16.3287C6.54906 16.3599 6.69561 16.4026 6.88423 16.4457C7.2619 16.532 7.80545 16.6192 8.45895 16.6192C9.76126 16.6192 11.5052 16.2738 13.2602 14.8698C14.1235 14.1792 14.9685 13.0768 15.7547 11.7779C16.5371 10.4853 17.2437 9.02758 17.8392 7.65329C18.4342 6.28016 18.9153 4.9975 19.2476 4.05781C19.4137 3.5882 19.5424 3.20482 19.6295 2.93932C19.673 2.80659 19.7061 2.70336 19.7282 2.6336L19.7531 2.55457L19.7593 2.53481L19.7611 2.52895C19.8331 2.29501 20.0812 2.1635 20.3151 2.23548Z" fill="black" />
                                                <path d="M14.8859 11.2002C15.1157 10.8631 15.0288 10.4036 14.6918 10.1738C14.3548 9.94396 13.8952 10.0309 13.6654 10.3679C12.5385 12.0205 11.7199 12.8851 10.9654 13.3321C10.2528 13.7544 9.52409 13.8465 8.43734 13.742C8.03128 13.7029 7.67043 14.0004 7.63136 14.4065C7.59229 14.8125 7.8898 15.1734 8.29586 15.2124C9.54273 15.3324 10.6296 15.2483 11.7185 14.603C12.7657 13.9825 13.7348 12.8883 14.8859 11.2002Z" fill="black" />
                                            </svg>
                                        </span>
                                        <span className={styles.liItemWrapper}>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
            <Wave />
        </header>
    );
};