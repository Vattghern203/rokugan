export async function getRandomImage() {

    return fetch('https://source.unsplash.com/random')
      .then(response => response.json())
      .then(data => data.urls.regular)
}