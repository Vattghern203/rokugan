const imageURL = 'https://sportshub.cbsistatic.com/i/2023/09/27/4c971d0d-bf91-493a-b47b-37fc877036b1/jujutsu-kaisen-gojo.jpg';

async function generateImage(): Promise<void> {
    const parentRoot = document.querySelector('#image-container');

    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const newImg = document.createElement('img');
        newImg.src = imageURL;
        newImg.id = 'gojo ' + i
        newImg.loading = "lazy";
        
        parentRoot?.appendChild(newImg);
    }
}

generateImage();