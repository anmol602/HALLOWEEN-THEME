gsap.from('.img-1', 1.2, {opacity:0, y:-150, delay: 0.5})
gsap.from('.img-2', 1.2, {opacity:0, y:-150, delay: 1.9})
gsap.from('.img-3', 1.2, {opacity:0, y:200, delay: 3.3})
gsap.from('.img-4', 1.2, {opacity:0, y:350, delay: 4.4})
gsap.from('.img-5', 1.2, {opacity:0, y:250, delay: 3.4})
gsap.from('.img-6', 1.2, {opacity:0, y:-350, delay: 3.5})
gsap.from('.img-7', 1.2, {opacity:0, y:-150, delay: 2.5})
gsap.from('h4', 1.2, {opacity:0, y:-150, delay: 4.2})
gsap.from('h1', 1.2, {opacity:0, y:-150, delay: 4.5})


const menu = document.querySelector('.nav');
const toggle = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

toggle.onclick = function(){
    menu.classList.add('active');
    toggle.style.display = 'none';
    closeBtn.style.display = 'block';
};

closeBtn.onclick = function(){
    menu.classList.remove('active');
    closeBtn.style.display = 'none';
    toggle.style.display = 'block';
};
