/* import { getRandomImage } from "./fetchImage" */
const imageContainer = document.querySelector('#image-container');
async function getRandomImage() {
    try {
        return fetch('https://source.unsplash.com/random')
            .then(response => response.url);
        /* .then(data => data.urls.regular) */
    }
    catch (err) {
        console.error(err);
    }
}
export async function dsplayImage(numberOfImages) {
    const promises = [];
    for (let i = 0; i < numberOfImages; i++) {
        const randomImage = await getRandomImage();
        if (randomImage) {
            promises.push(randomImage);
        }
    }
    const imageURLs = await Promise.all(promises);
    const validUrls = imageURLs.filter(url => url);
    validUrls.forEach(imageURL => {
        const image = document.createElement('img');
        image.classList.add('rokugan');
        image.src = imageURL;
        image.alt = 'Random Image from unsplash.com';
        imageContainer?.appendChild(image);
    });
}
// MUGEN
const mugen = async () => {
    await dsplayImage(10);
    const imgs = document.querySelectorAll('.rokugan');
    imgs.forEach((img) => {
        if ((img.complete !== false) && (img.dataset.rkShow === "true")) {
            dsplayImage(3);
        }
    });
};
mugen();
