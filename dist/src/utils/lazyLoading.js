export function lazyLoadingHandler(elementList) {
    const srcList = [];
    elementList.forEach((element, key) => {
        srcList.push({
            id: key,
            src: element.src,
            isShowing: false
        });
    });
    console.log(srcList);
}
