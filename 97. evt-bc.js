
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const body = document.querySelector('body');

// captureing

body.addEventListener('click', () => {
    console.log('capture....!!! body');
}, true);

grandparent.addEventListener('click', () => {
    console.log('capture....!!! grandparent');
}, true);

parent.addEventListener('click', () => {
    console.log('capture....!!! parent');
}, true);

child.addEventListener('click', () => {
    console.log('capture....!!! child');
}, true);



//not captureing

body.addEventListener('click', () => {
    console.log('clicked on ....!!! body');
});

grandparent.addEventListener('click', () => {
    console.log('clicked on ....!!! grandparent');
});

parent.addEventListener('click', () => {
    console.log('clicked on ....!!! parent');
});

child.addEventListener('click', () => {
    console.log('clicked on ....!!! child');
});