const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

const mainimg=document.getElementById('Mainimg');
const smallimg=document.getElementsByClassName('small-img-col');

if(bar){
  bar.addEventListener('click',()=>{
    nav.classList.add('active');
  })
}

if(close){
  close.addEventListener('click',()=>{
    nav.classList.remove('active');
  })
}

for (let i = 0; i < smallimg.length; i++) {
  smallimg[i].addEventListener('click',()=>{
    mainimg.src = smallimg[i].querySelector('img').src;
  });
}
