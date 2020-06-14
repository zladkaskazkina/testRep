import Vue from 'vue';
import App from './components/App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
});


// let upLikes = 0;
// let downLikes = 0;

// const btnUp = document.querySelector('#btn-up');
// const btnDown = document.querySelector('#btn-down');

// btnUp.addEventListener('click', () => {
//   upLikes += 1;
//   const likesUpElm = document.querySelector('#likes-up');
//   likesUpElm.textContent = upLikes;
// });

// btnDown.addEventListener('click', () => {
//   downLikes += 1;
//   const likesDownElm = document.querySelector('#likes-down');
//   likesDownElm.textContent = downLikes;
// });

