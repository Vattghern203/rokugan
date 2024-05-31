class Rokugan {
    options;
    callbackFn;
    mutationObserver;
    intersectionObserver;
    targetNode;
    constructor(options = {}, callbackFn // Function to be called when intersecting
    ) {
        this.options = options;
        this.callbackFn = callbackFn;
        this.targetNode = document.body; // You can adjust this based on your needs
        // Initialize the MutationObserver
        this.mutationObserver = new MutationObserver(this.handleMutations);
        this.mutationObserver.observe(this.targetNode, { childList: true, subtree: true });
        // Initialize the IntersectionObserver
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const element = entry.target;
                element.classList.toggle('rk-show', entry.isIntersecting);
                element.dataset.rkShow = entry.isIntersecting ? "true" : "false";
                if (this.options.unobserveOnShow && entry.isIntersecting) {
                    this.intersectionObserver.unobserve(element);
                }
                if (entry.isIntersecting && entry.target.complete) {
                    if (this.callbackFn) {
                        this.callbackFn();
                    }
                }
            });
        }, this.options);
    }
    handleMutations = (mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const addedNodes = Array.from(mutation.addedNodes);
                this.observeElements(addedNodes);
            }
        });
    };
    observe(elements) {
        this.observeElements(Array.from(elements));
    }
    observeElements(elements) {
        elements.forEach((element) => {
            if (element instanceof HTMLElement) {
                this.intersectionObserver.observe(element);
            }
        });
    }
    disconnect() {
        this.mutationObserver.disconnect();
        this.intersectionObserver.disconnect();
    }
}
export { Rokugan };
