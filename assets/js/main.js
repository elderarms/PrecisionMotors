// assets/js/main.js - minimal interactive bits
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if(navToggle){
    navToggle.addEventListener('click', e=>{
      nav.classList.toggle('open');
    });
  }
});