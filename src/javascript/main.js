import Typed from './../../node_modules/typed.js/src/typed.js';

const options = {
  backDelay: 2000,
  backSpeed: 30,
  loop: true,
  smartBackspace: true,
  strings: ['fessional', 'active', 'ficient', 'ductive'],
  typeSpeed: 70,
};

const typed = new Typed('.typed', options);
