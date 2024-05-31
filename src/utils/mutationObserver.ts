import { lazyLoadingHandler } from "./lazyLoading";

const config: MutationObserverInit = { attributes: true, childList: true, subtree: true };

const targetNode = document.querySelector('#image-container');

function mutationCheck(mutationList: MutationRecord[]) {
    for (const mutation of mutationList) {

        if (mutation.type === "childList") {
            
            console.log('New child has born');
        } else if (mutation.type === "attributes") {
            console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    }
}

const mutationObserver = new MutationObserver(mutationCheck);

if (targetNode) {
    mutationObserver.observe(targetNode, config);
} else {
    console.error('The target node was not found in the document.');
}
