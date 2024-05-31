import { getImage } from "./apiClient.js";
const photo = getImage().then(console.log);
