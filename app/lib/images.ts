import { StaticImageData } from "next/image"

import raspberry from "@/public/raspberry/raspberry-1200w.png"
import mango from "@/public/mango/mango-1200w.png"
import mint from "@/public/mint/mint-1200w.png"
import bubblegum from "@/public/bubblegum/bubblegum-1200w.png"
import caramel from "@/public/caramel/caramel-1200w.png"
import coconut from "@/public/coconut/coconut-1200w.png"
import lavender from "@/public/lavender/lavender-1200w.png"
import peach from "@/public/peach/peach-letual.png"
import inzhir from "@/public/inzhir/inzhir-320w.png"
import citrus from "@/public/citrus/citrus-320w.png"
import apple from "@/public/apple/apple-card-320w.png"
import mintMango from "@/public/mint-mango-500w.png"
import coconutLavender from "@/public/coconut-lavender-500w.png"
import peachLavender from "@/public/peach-lavender-500w.png"
import coconutPeach from "@/public/coconut-peach-500w.png"
import trio from "@/public/trio.png"

import inzhirPng from "@/public/inzhir/inzhir-main-790w.png";
import applePng from "@/public/apple/apple-main-790w.png";
import citrusPng from "@/public/citrus/citrus-main-790w.png";

import searchRaspberry from "@/public/raspberry/raspberry-main-1200w.png";
import searchMango from "@/public/mango/mango-main-1200w.png";
import searchMint from "@/public/mint/mint-main-no-mint-1200.png";
import searchBubblegum from "@/public/bubblegum/bubblegum-main-1200w.png";
import searchCaramel from "@/public/caramel/caramel-main-1200w.png";
import searchCoconut from "@/public/coconut/coconut-main-1200w.png";
import searchLavender from "@/public/lavender/lavender-main-1200w.png";
import searchPeach from "@/public/peach/peach-letual.png";
import searchMintMango from "@/public/mango-chilli-1200w-1.png"
import searchCoconutLavender from "@/public/lavender-coconut-1200w-1.png"
import searchPeachLavender from "@/public/lavender-peach-1200w-1.png"
import searchCoconutPeach from "@/public/peach-coconut-1200w-1.png"

import mango0 from "@/public/mango/mango-chilli-pocket-600w.jpg";
import mango1 from "@/public/mango/mango-chilli-pocket-600w-1.jpg";
import mango2 from "@/public/mango/mango-chilli-pocket-600w-2.jpg";
import lavender0 from "@/public/lavender/lavender-black-currant-pocket-600w.jpg";
import lavender1 from "@/public/lavender/lavender-black-currant-pocket-600w-1.jpg";
import lavender2 from "@/public/lavender/lavender-black-currant-pocket-600w-2.jpg";
import coconut0 from "@/public/coconut/coconut-pocket-600w.jpg";
import coconut1 from "@/public/coconut/coconut-pocket-600w-1.jpg";
import coconut2 from "@/public/coconut/coconut-pocket-600w-2.jpg";
import mint0 from "@/public/mint/mint-cucumber-pocket-600w.jpg";
import mint1 from "@/public/mint/mint-cucumber-pocket-600w-1.jpg";
import mint2 from "@/public/mint/mint-cucumber-pocket-600w-2.jpg";
import peach0 from "@/public/peach/peach-pocket-600w.jpg";
import peach1 from "@/public/peach/peach-pocket-600w-1.jpg";
import peach2 from "@/public/peach/peach-pocket-600w-2.jpg";
import inzhir0 from "@/public/inzhir/inzhir-pocket-600w.jpg";
import inzhir1 from "@/public/inzhir/inzhir-pocket-600w-1.jpg";
import inzhir2 from "@/public/inzhir/inzhir-pocket-600w-2.jpg";
import citrus0 from "@/public/citrus/citrus-pocket-600w.jpg";
import citrus1 from "@/public/citrus/citrus-pocket-600w-1.jpg";
import citrus2 from "@/public/citrus/citrus-pocket-600w-2.jpg";
import apple0 from "@/public/apple/apple-pocket-600w.jpg";
import apple1 from "@/public/apple/apple-pocket-600w-1.jpg";
import apple2 from "@/public/apple/apple-pocket-600w-2.jpg";
import trio0 from "@/public/trio-600w.jpg";
import trio1 from "@/public/trio-600w-1.jpg";
import trio2 from "@/public/trio-600w-2.jpg";

import caramelImg from "@/public/caramel/caramel-main-1200w-1.png";
import mintImg from "@/public/mint/mint-main-1200w.png";

const catalogImages: { [key: number]: StaticImageData } = {
    1: mango,
    2: bubblegum,
    3: inzhir,
    4: caramel,
    5: coconut,
    6: citrus,
    7: raspberry,
    8: peach,
    9: apple,
    10: lavender,
    11: mint,
    12: mintMango,
    13: coconutLavender,
    14: coconutPeach,
    15: peachLavender,
    16: trio,
}

const bestsellersImages: {[key: number]: StaticImageData} = {
    1: mango,
    2: bubblegum,
    3: inzhirPng,
    4: caramel,
    5: coconut,
    6: citrusPng,
    7: raspberry,
    8: mango,
    9: applePng,
    10: lavender,
    11: mint,
    12: mintMango,
    13: coconutLavender,
    14: coconutPeach,
    15: peachLavender,
    16: trio
}

const searchImages: {[key: number]: StaticImageData} = {
    1: searchMango,
    2: searchBubblegum,
    3: inzhir,
    4: searchCaramel,
    5: searchCoconut,
    6: citrus,
    7: searchRaspberry,
    8: searchPeach,
    9: apple,
    10: searchLavender,
    11: searchMint,
    12: searchMintMango,
    13: searchCoconutLavender,
    14: searchCoconutPeach,
    15: searchPeachLavender,
    16: trio
}

const productImages: { [key: number]: StaticImageData[] } = {
    1: [mango0, mango1, mango2,],
    2: [mango0, mango1, mango2,],
    3: [inzhir0, inzhir1, inzhir2],
    4: [mango0, mango1, mango2,],
    5: [coconut0, coconut1, coconut2,],
    6: [citrus0, citrus1, citrus2],
    7: [mango0, mango1, mango2,],
    8: [peach0, peach1, peach2,],
    9: [apple0, apple1, apple2],
    10: [lavender0, lavender1, lavender2,],
    11: [mint0, mint1, mint2,], 
    12: [mint0, mint1, mint2, mango0, mango1, mango2,],
    13: [lavender0, lavender1, lavender2, coconut0, coconut1, coconut2,],
    14: [peach0, peach1, peach2, coconut0, coconut1, coconut2,],
    15: [lavender0, lavender1, lavender2, peach0, peach1, peach2,],
    16: [trio0, trio1, trio2,],  
}

const mainCardImages: {[key: number]: StaticImageData} = {
    1: searchMango,
    2: searchBubblegum,
    3: inzhirPng,
    4: caramelImg,
    5: searchCoconut,
    6: citrusPng,
    7: searchRaspberry,
    8: searchPeach,
    9: applePng,
    10: searchLavender,
    11: mintImg,
    12: searchMintMango,
    13: searchCoconutLavender,
    14: searchCoconutPeach,
    15: searchPeachLavender,
    16: trio
}

export const getSearchImages = () => searchImages
export const getBestsellersImages = () => bestsellersImages
export const getCatalogImages = () => catalogImages
export const getProductImages = () => productImages
export const getMainCardImages = () => mainCardImages
