import './css/index.css';
import sum from './sum';

console.log(sum(4, 6, 8, 7, 19));

const title = document.getElementById('title');
title.innerText = sum(4, 6, 8, 7, 19, 888).toString();
