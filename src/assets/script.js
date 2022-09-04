/** @type {HTMLAnchorElement[]} */
const tags = document.getElementsByClassName('hover-image-js');

for (let tag of tags) {
    tag.addEventListener(
        'mouseenter', evt => {
            /** @type {HTMLAnchorElement} */
            let target = evt.target;
            let hiddenTags = target.getElementsByClassName('hidden');
            for (let hiddenTag of hiddenTags) {
                hiddenTag.className = hiddenTag.className.replace('hidden', 'visible');
            }
        }
    )

    tag.addEventListener(
        'mouseleave', evt => {
            /** @type {HTMLAnchorElement} */
            let target = evt.target;
            let hiddenTags = target.getElementsByClassName('visible');
            for (let hiddenTag of hiddenTags) {
                hiddenTag.className = hiddenTag.className.replace('visible', 'hidden');
            }
        }
    )
}

