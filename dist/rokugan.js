class Rokugan {
    options;
    callbackFn;
    constructor(options = {}, callbackFn // Function to be called when intersecting
    ) {
        this.options = options;
        this.callbackFn = callbackFn;
    }
    observe(targetList) {
        try {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const element = entry.target;
                    element.classList.toggle('rk-show', entry.isIntersecting);
                    element.dataset.rkShow = entry.isIntersecting ? "true" : "false";
                    if (this.options.unobserveOnShow == true && entry.isIntersecting) {
                        observer.unobserve(element);
                    }
                    const imageElement = entry.target;
                    if (entry.isIntersecting && imageElement.complete === true) {
                        this.callbackFn ? this.callbackFn() : null;
                    }
                });
            }, this.options);
            targetList.forEach((element) => observer.observe(element));
        }
        catch (error) {
            console.error(error);
        }
    }
}
export { Rokugan };
