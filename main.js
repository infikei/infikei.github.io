function link_home() {
    location.href="https://infikei.github.io";
}
function area_profile() {
    location.href="https://infikei.github.io#profile";
}
function area_channels() {
    location.href="https://infikei.github.io#channels";
}
function area_pages() {
    location.href="https://infikei.github.io#pages";
}
function area_contact() {
    location.href="https://infikei.github.io#contact";
}
function link_talk() {
    window.open("https://pf.kakao.com/_xaeEyT");
}
function link_instagram() {
    window.open("https://instagram.com/infikei_photo", "_blank");
}

const toggleBtn = document.querySelector('.navbar_togglebtn');
const menu = document.querySelector('.navbar_menu');
const sns = document.querySelector('.navbar_sns');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    sns.classList.toggle('active')
});