# Rokugan

A simple IntersectionObserver amd MutationObserver implementation to achieve lazy loading and dynamically show elements on screen. 

This also a tribute to the Honored One.

![https://raw.githubusercontent.com/Vattghern203/rokugan/main/.github/jujutsu-kaisen-gojo.webp](https://raw.githubusercontent.com/Vattghern203/rokugan/main/.github/jujutsu-kaisen-gojo.webp)

## Getting Started

1. Import Rokugan (types and interfaces are optional).

```js
import { Rokugan } from './path/to/rokugan';
```

2. Create a list of elements that will be observed (```NodeListOf<Element | ImageElement | HTMLElement>```).

```ts
// Example
elements = document.querySelectorAll('body .card')
``` 

3. Create your own setting object using the `RokuganInit` interface

```ts
const rokuganOptions: RokuganInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
    unobserveOnShow: false // This must be false to lazy loading works
}
```

4. Create a function to be triggered when the user reachs the last loaded element on the viewport.

```ts
// Example

const imageURL = 'random/image/address';

async function generateImage(): Promise<void> {
    const parentRoot = document.querySelector('your-parent-element');

    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const newImg = document.createElement('img');
        newImg.src = imageURL;
        newImg.id = 'gojo ' + i
        newImg.loading = "lazy";
        
        parentRoot?.appendChild(newImg);
    }
}
```

![https://github.com/Vattghern203/rokugan/blob/main/.github/jujutsu-kaisen-gojo.gif](https://github.com/Vattghern203/rokugan/blob/main/.github/jujutsu-kaisen-gojo.gif?raw=true)

*"Throughout Heaven and Earth, I Alone Am The Honored One"*