"use strict";
const config = { attributes: true, childList: true, subtree: true };
const targeNode = document.querySelector('#image-container');
const mutationCheck = (mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            console.log('New child has born');
        }
        else if (mutation.type === "attributes") {
            console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    }
};
const mutationObserver = new MutationObserver(mutationCheck);
if (targeNode) {
    mutationObserver.observe(targeNode, config);
}
