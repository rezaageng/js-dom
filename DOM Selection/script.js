// DOM Selection
// document.getElementById() -> Element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'purple';
judul.innerHTML = 'Halo Dunia!';

// document.getElementsByTagName() ->  HTMLCollectons
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'salmon';
}
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Tulisan ini diubah menggunakan Javascript';

// document.querySelector() -> Element
const p4 = document.querySelector('#b p');
p4.style.color = 'white';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'red';

// document.querySelectorAll() -> Element
const li = document.querySelectorAll('li')
for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = 'Tulisan ini dari js';
}