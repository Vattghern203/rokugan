import { Rokugan } from "../rokugan.js";
import { mugen } from "./displayImage.js";
import { generateImage } from "./generateImage.js";
mugen();
const articles = document.querySelectorAll('img');
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
    unobserveOnShow: false
};
const rokugan = new Rokugan(observerOptions, generateImage);
rokugan.observe(articles);
const article = document.getElementById('first');
articles ? rokugan.observe(articles) : null;
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
