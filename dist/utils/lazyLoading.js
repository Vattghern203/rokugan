import { Rokugan } from "../rokugan.js";
import { mugen } from "./displayImage.js";
mugen();
const articles = document.querySelectorAll('img');
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
    unobserveOnShow: false
};
const rokugan = new Rokugan(observerOptions);
rokugan.observe(articles);
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
