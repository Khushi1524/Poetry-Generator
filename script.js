function getNav(){
  fetch('./components/header.html')
  .then(p => p.text())
  .then(p => {
    console.log(p)
    document.getElementById('pagenav').innerHTML= p
  })
}

getNav();
