'use strict';

{
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () =>{

    const n = Math.random();
    if (n < 0.05){
      btn.textContent = '大吉';
    }else if (n < 0.20){
      btn.textContent = '中吉';
    }else if (n < 0.35){
      btn.textContent = '小吉';
    }else if (n < 0.55){
      btn.textContent = '末吉';
    }else if (n < 0.85){
      btn.textContent = '吉';
    }else if (n < 0.95){
      btn.textContent = '凶';
    }else{
      btn.textContent = '大凶';
    }
  });
}