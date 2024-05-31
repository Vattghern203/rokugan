import { Rokugan, RokuganInit } from "../rokugan.js"

import { mugen } from "./displayImage.js"

import { generateImage } from "./generateImage.js"

mugen()

const articles = document.querySelectorAll('img')

const observerOptions: RokuganInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
    unobserveOnShow: false
}

const rokugan = new Rokugan(
    observerOptions,
    generateImage
)

rokugan.observe(articles)

const article = document.getElementById('first')

articles ? rokugan.observe(articles) : null

type lazyImaageType = {
    id: number,
    src: string,
    isShowing: boolean
}

export function lazyLoadingHandler(elementList: NodeListOf<HTMLImageElement>) {

    const srcList: lazyImaageType[] = []

    elementList.forEach((element: HTMLImageElement, key) => {

        srcList.push(
            {
                id: key,
                src: element.src,
                isShowing: false
            }
        )

    })
    
    console.log(srcList)
}