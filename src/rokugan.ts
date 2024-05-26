interface RokuganInit extends IntersectionObserverInit {
    unobserveOnShow?: boolean
}

class Rokugan {

    constructor(
        public options: RokuganInit = {},
        public callbackFn?: () => void // Function to be called when intersecting

    ) { }

    observe(targetList: NodeListOf<HTMLElement | Element | HTMLImageElement>) {

        try {

            const observer = new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        const element = entry.target as HTMLElement

                        element.classList.toggle('rk-show', entry.isIntersecting)
                        element.dataset.rkShow = entry.isIntersecting ? "true" : "false"

                        if (this.options.unobserveOnShow == true && entry.isIntersecting) {

                            observer.unobserve(element)
                        }

                        const imageElement = entry.target as HTMLImageElement

                        if (entry.isIntersecting && imageElement.complete === true) {

                            this.callbackFn ? this.callbackFn() : null
                        }
                    })
                },

                this.options
            )

            targetList.forEach(
                (element) => observer.observe(element)
            )

        }

        catch (error) { console.error(error) }

    }
}

export { Rokugan, RokuganInit }