import { 
    getAppleElements,
    getBubblegumElements,
    getCaramelElements,
    getCitrusElements,
    getCoconutElements,
    getFigsElements,
    getLavenderCoconutElements,
    getLavenderElements,
    getLavenderPeachElements,
    getMangoElements,
    getMintElements,
    getMintMangoElements,
    getPeachElements,
    getRaspberryElements,
    getTrioElements,
    getPeachCoconutElements,
 } from "@/app/lib/elements"

import appleStyles from "../../styles/elements/apple.module.css"
import bubblegumStyles from "../../styles/elements/bubblegum.module.css"
import caramelStyles from "../../styles/elements/caramel.module.css"
import citrusStyles from "../../styles/elements/citrus.module.css"
import coconutStyles from "../../styles/elements/coconut.module.css"
import figStyles from "../../styles/elements/inzhir.module.css"
import lavenderStyles from "../../styles/elements/lavender.module.css"
import lavenderCoconutStyles from "../../styles/elements/lavender-coconut.module.css"
import lavenderPeachStyles from "../../styles/elements/lavender-peach.module.css"
import mangoStyles from "../../styles/elements/mango.module.css"
import mintStyles from "../../styles/elements/mint.module.css"
import mintMangoStyles from "../../styles/elements/mint-mango.module.css"
import peachStyles from "../../styles/elements/peach.module.css"
import peachCoconutStyles from "../../styles/elements/peach-coconut.module.css"
import raspberryStyles from "../../styles/elements/raspberry.module.css"
import trioStyles from "../../styles/elements/trio.module.css"

import Image from "next/image"

export const Apple = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: appleStyles.elem1,
        2: appleStyles.elem2,
        3: appleStyles.elem3,
        4: appleStyles.elem4,
        5: appleStyles.elem5,
        6: appleStyles.elem6,
        7: appleStyles.elem7,
        8: appleStyles.elem8,
        9: appleStyles.elem9,
        10: appleStyles.elem10,
    }
    
    const elements = getAppleElements()

    return (
        <div className={appleStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Bubblegum = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: bubblegumStyles.elem1,
        2: bubblegumStyles.elem2,
        3: bubblegumStyles.elem3,
        4: bubblegumStyles.elem4,
        5: bubblegumStyles.elem5,
        6: bubblegumStyles.elem6,
        7: bubblegumStyles.elem7,
    }
    
    const elements = getBubblegumElements()

    return (
        <div className={bubblegumStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Caramel = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: caramelStyles.elem1,
        2: caramelStyles.elem2,
        3: caramelStyles.elem3,
        4: caramelStyles.elem4,
        5: caramelStyles.elem5,
        6: caramelStyles.elem6,
        7: caramelStyles.elem7,
        8: caramelStyles.elem8,
        9: caramelStyles.elem9,
        10: caramelStyles.elem10,
    }
    
    const elements = getCaramelElements()

    return (
        <div className={caramelStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Citrus = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: citrusStyles.elem1,
        2: citrusStyles.elem2,
        3: citrusStyles.elem3,
        4: citrusStyles.elem4,
        5: citrusStyles.elem5,
        6: citrusStyles.elem6,
        7: citrusStyles.elem7,
        8: citrusStyles.elem8,
        9: citrusStyles.elem9,
        10: citrusStyles.elem10,
    }
    
    const elements = getCitrusElements()

    return (
        <div className={citrusStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Coconut = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: coconutStyles.elem1,
        2: coconutStyles.elem2,
        3: coconutStyles.elem3,
        4: coconutStyles.elem4,
        5: coconutStyles.elem5,
        6: coconutStyles.elem6,
        7: coconutStyles.elem7,
        8: coconutStyles.elem8,
        9: coconutStyles.elem9,
        10: coconutStyles.elem10,
    }
    
    const elements =getCoconutElements()

    return (
        <div className={coconutStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Fig = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: figStyles.elem1,
        2: figStyles.elem2,
        3: figStyles.elem3,
        4: figStyles.elem4,
        5: figStyles.elem5,
        6: figStyles.elem6,
        7: figStyles.elem7,
        8: figStyles.elem8,
        9: figStyles.elem9,
        10: figStyles.elem10,
    }
    
    const elements = getFigsElements()

    return (
        <div className={figStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Lavender = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: lavenderStyles.elem1,
        2: lavenderStyles.elem2,
        3: lavenderStyles.elem3,
        4: lavenderStyles.elem4,
        5: lavenderStyles.elem5,
        6: lavenderStyles.elem6,
        7: lavenderStyles.elem7,
        8: lavenderStyles.elem8,
        9: lavenderStyles.elem9,
        10: lavenderStyles.elem10,
    }
    
    const elements = getLavenderElements()

    return (
        <div className={lavenderStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const LavenderCoconut = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: lavenderCoconutStyles.elem1,
        2: lavenderCoconutStyles.elem2,
        3: lavenderCoconutStyles.elem3,
        4: lavenderCoconutStyles.elem4,
        5: lavenderCoconutStyles.elem5,
        6: lavenderCoconutStyles.elem6,
        7: lavenderCoconutStyles.elem7,
        8: lavenderCoconutStyles.elem8,
        9: lavenderCoconutStyles.elem9,
        10: lavenderCoconutStyles.elem10,
    }
    
    const elements = getLavenderCoconutElements()

    return (
        <div className={lavenderCoconutStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const LavenderPeach = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: lavenderPeachStyles.elem1,
        2: lavenderPeachStyles.elem2,
        3: lavenderPeachStyles.elem3,
        4: lavenderPeachStyles.elem4,
        5: lavenderPeachStyles.elem5,
        6: lavenderPeachStyles.elem6,
        7: lavenderPeachStyles.elem7,
        8: lavenderPeachStyles.elem8,
        9: lavenderPeachStyles.elem9,
        10: lavenderPeachStyles.elem10,
    }
    
    const elements = getLavenderPeachElements()

    return (
        <div className={lavenderPeachStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Mango = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: mangoStyles.elem1,
        2: mangoStyles.elem2,
        3: mangoStyles.elem3,
        4: mangoStyles.elem4,
        5: mangoStyles.elem5,
        6: mangoStyles.elem6,
        7: mangoStyles.elem7,
        8: mangoStyles.elem8,
        9: mangoStyles.elem9,
        10: mangoStyles.elem10,
    }
    
    const elements = getMangoElements()
    return (
        <div className={mangoStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Mint = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: mintStyles.elem1,
        2: mintStyles.elem2,
        3: mintStyles.elem3,
        4: mintStyles.elem4,
        5: mintStyles.elem5,
        6: mintStyles.elem6,
        7: mintStyles.elem7,
        8: mintStyles.elem8,
        9: mintStyles.elem9,
        10: mintStyles.elem10,
    }
    
    const elements = getMintElements()

    return (
        <div className={mintStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const MintMango = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: mintMangoStyles.elem1,
        2: mintMangoStyles.elem2,
        3: mintMangoStyles.elem3,
        4: mintMangoStyles.elem4,
        5: mintMangoStyles.elem5,
        6: mintMangoStyles.elem6,
        7: mintMangoStyles.elem7,
        8: mintMangoStyles.elem8,
        9: mintMangoStyles.elem9,
        10: mintMangoStyles.elem10,
    }
    
    const elements = getMintMangoElements()

    return (
        <div className={mintMangoStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Peach = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: peachStyles.elem1,
        2: peachStyles.elem2,
        3: peachStyles.elem3,
        4: peachStyles.elem4,
        5: peachStyles.elem5,
        6: peachStyles.elem6,
        7: peachStyles.elem7,
        8: peachStyles.elem8,
        9: peachStyles.elem9,
        10: peachStyles.elem10,
    }
    
    const elements = getPeachElements()

    return (
        <div className={peachStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const PeachCoconut = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: peachCoconutStyles.elem1,
        2: peachCoconutStyles.elem2,
        3: peachCoconutStyles.elem3,
        4: peachCoconutStyles.elem4,
        5: peachCoconutStyles.elem5,
        6: peachCoconutStyles.elem6,
        7: peachCoconutStyles.elem7,
        8: peachCoconutStyles.elem8,
        9: peachCoconutStyles.elem9,
        10: peachCoconutStyles.elem10,
    }
    
    const elements = getPeachCoconutElements()
    return (
        <div className={peachCoconutStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Raspberry = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: raspberryStyles.elem1,
        2: raspberryStyles.elem2,
        3: raspberryStyles.elem3,
        4: raspberryStyles.elem4,
        5: raspberryStyles.elem5,
        6: raspberryStyles.elem6,
        7: raspberryStyles.elem7,
        8: raspberryStyles.elem8,
        9: raspberryStyles.elem9,
        10: raspberryStyles.elem10,
    }
    
    const elements = getRaspberryElements()

    return (
        <div className={raspberryStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}

export const Trio = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: trioStyles.elem1,
        2: trioStyles.elem2,
        3: trioStyles.elem3,
        4: trioStyles.elem4,
        5: trioStyles.elem5,
        6: trioStyles.elem6,
        7: trioStyles.elem7,
        8: trioStyles.elem8,
        9: trioStyles.elem9,
        10: trioStyles.elem10,
    }
    
    const elements = getTrioElements()

    return (
        <div className={trioStyles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}