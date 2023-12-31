window.addEventListener('load', no);
function noscroll(e) {
    e.preventDefault();
}
function no() {
    document.addEventListener('touchmove', noscroll, { passive: false });
    document.addEventListener('wheel', noscroll, { passive: false });
}
window.setTimeout(animation, 6000);
const loading = document.querySelector('.titlePage');
function animation() {
    loading.classList.add('loaded');
    window.setTimeout(ok, 3000);
    function ok() {
        document.removeEventListener('touchmove', noscroll);
        document.removeEventListener('wheel', noscroll);
    }
}