const bg = document.querySelector('#bg');

addEventListener('touchstart', () => bg.style.setProperty('--multiplier', '0'));
addEventListener('mousemove', ({ clientX, clientY }) => {
    bg.style.setProperty('--tx', `${20 * (clientX - innerWidth / 2) / innerWidth}px`);
    bg.style.setProperty('--ty', `${20 * (clientY - innerHeight / 2) / innerHeight}px`);
});

['mouseenter', 'mouseleave'].forEach(e => document.addEventListener(e, () => {
    if (e === 'mouseleave') bg.removeAttribute('style');
    bg.style.transition = 'transform .1s linear';
    setTimeout(() => bg.style.transition = '', 100);
}));

// random bg
var images = ['/bg1.jpg',  '/bg2.jpg', '/bg3.jpg', '/bg4.jpg', '/bg5.jpg', '/bg6.jpg', '/bg7.jpg'];

var randomImage = Math.floor(Math.random() * images.length);

document.querySelector(':root').style.setProperty("--background", "image-set(url('/backgrounds" + images[randomImage] + "'))");
