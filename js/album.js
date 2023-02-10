let container = document.querySelector(`.album`);

let search = new URLSearchParams(window.location.search);

let i = search.get(`i`);
let album = albums[i];
if (!album){
    container.innerHTML = `<p class= "fs-5 text-center"> Не играйся с url</p>`
    setTimeout(() => {
        window.location.pathname = 'index.html'
    },5000);
    
}

container.innerHTML = `<div class="card mb-3">
            <div class="row ">
            <div class="col-4">
            <img src="${album.img}" class="card-img-top" alt="">
            </div>
            <div class="col-8">
            <h4>Лилипуты</h4>
            <p>${album.description}</p>
            <p><small>Было выпущено в свет в ${album.year} году</small></p>
            </div>
            </div>
            </div>`


let playlist = document.querySelector(`.playlist`);

let tracc = album.tracs;

for (let i = 0; i<tracc.length;i++){
    let trac = tracc[i]
    playlist.innerHTML += `<li class="list-group-item d-flex align-items-center">
            <img class="me-3" src="assets/icon1.png" alt="" width="30px" >
            <div class="">
            <div>${trac.name}</div>
            <div class="text-secondary">${trac.author}</div>
        </div>
            <div class="ms-auto">${trac.time}</div>
        </li>`

}