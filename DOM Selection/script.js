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