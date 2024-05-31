interface RokuganInit extends IntersectionObserverInit {
    unobserveOnShow?: boolean;
}

class Rokugan {
    private mutationObserver: MutationObserver;
    private intersectionObserver: IntersectionObserver;
    private targetNode: Node;

    constructor(
        public options: RokuganInit = {},
        public callbackFn?: () => void // Function to be called when intersecting
    ) {
        this.targetNode = document.body; // You can adjust this based on your needs

        // Initialize the MutationObserver
        this.mutationObserver = new MutationObserver(this.handleMutations);
        this.mutationObserver.observe(this.targetNode, { childList: true, subtree: true });

        // Initialize the IntersectionObserver
        this.intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = entry.target as HTMLElement;
                    element.classList.toggle('rk-show', entry.isIntersecting);
                    element.dataset.rkShow = entry.isIntersecting ? "true" : "false";

                    if (this.options.unobserveOnShow && entry.isIntersecting) {
                        this.intersectionObserver.unobserve(element);
                    }

                    if (entry.isIntersecting && (entry.target as HTMLImageElement).complete) {
                        if (this.callbackFn) {
                            this.callbackFn();
                        }
                    }
                });
            },
            this.options
        );
    }

    private handleMutations = (mutations: MutationRecord[]) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const addedNodes = Array.from(mutation.addedNodes) as Node[];
                this.observeElements(addedNodes);
            }
        });
    };

    public observe(elements: NodeListOf<HTMLElement | Element | HTMLImageElement>) {
        this.observeElements(Array.from(elements));
    }

    private observeElements(elements: Node[]) {
        elements.forEach((element) => {
            if (element instanceof HTMLElement) {
                this.intersectionObserver.observe(element);
            }
        });
    }

    public disconnect() {
        this.mutationObserver.disconnect();
        this.intersectionObserver.disconnect();
    }
}

export { Rokugan, RokuganInit };
