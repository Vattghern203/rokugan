"use strict";
class Rokugan {
    options;
    unobserveOnShow;
    constructor(options = {}, unobserveOnShow) {
        this.options = options;
        this.unobserveOnShow = unobserveOnShow;
    }
    observe(targetList) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const element = entry.target;
                element.classList.toggle('rk-show', entry.isIntersecting);
                element.dataset.rkShow = entry.isIntersecting ? "true" : "false";
                if (this.unobserveOnShow == true && entry.isIntersecting) {
                    observer.unobserve(element);
                }
            });
        }, this.options);
        targetList.forEach((element) => observer.observe(element));
    }
}
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
    unobserveOnShow: false
};
//export { Rokugan, RokuganInit }
const sixEyes = new Rokugan({
    root: null,
    rootMargin: "0px",
    threshold: 1,
});
const games = document.querySelectorAll("main article");
console.log(games);
sixEyes.observe(games);
