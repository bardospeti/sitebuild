//Header background controller:
var header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
        header.classList.add('active');

    } else {
        header.classList.remove('active');
    }
});