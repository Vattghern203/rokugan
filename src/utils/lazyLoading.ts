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