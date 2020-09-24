//Select element function
const selEl = function (element) {
    return document.querySelector(element);
};

let menuToggler = selEl('.menu-toggle');
let body = selEl('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});