import { createClient, ErrorResponse, PhotosWithTotalResults } from "pexels";

async function getImage(query: string = 'Japan') {
    // Ensure that the API key is provided
    if (!process.env.API_KEY) {
        throw new Error('API key is missing');
    }

    // Create the Pexels client
    const client = createClient(process.env.API_KEY);

    // Search for the photos with the given query
    
    return new Promise<PhotosWithTotalResults | ErrorResponse>((resolve, reject) => {
        resolve(client.photos.search({ query, per_page: 1 }))

        reject('N deu bom')
    })
}

export { getImage };