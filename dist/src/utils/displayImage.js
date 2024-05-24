import { getRandomImage } from "./fetchImage";
const imageContainer = document.querySelector('#image-container');
async function dsplayImage(numberOfImages) {
    const promises = [];
    for (let i = 0; i < numberOfImages; i++) {
        promises.push(await getRandomImage());
    }
    const imageURLs = await Promise.all(promises);
    imageURLs.forEach(imageURL => {
        const image = document.createElement('img');
        image.src = imageURL;
        image.alt = 'Random Image from unsplash.com';
        imageContainer?.appendChild(image);
    });
}
dsplayImage(12);
