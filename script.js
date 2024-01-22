function getNav(){
  fetch('./components/header.html')
  .then(p => p.text())
  .then(p => {
    console.log(p)
    document.getElementById('pagenav').innerHTML= p
  })
}

getNav();


function getauth(){
  fetch('./components/authentication.html')
  .then(p => p.text())
  .then(p => {
    console.log(p)
    document.body.innerHTML += p;
  })
}

getauth();

function closeauth(){
  document.getElementById('auth2').style.display = 'none'
}

function openlogin(){

document.getElementById('auth2').style.display = 'flex'
document.getElementById('login').style.display = 'flex'
document.getElementById('signup').style.display = 'none'
alert('login')
}

function opensignup(){
document.getElementById('auth2').style.display = 'flex'
document.getElementById('login').style.display = 'none'
document.getElementById('signup').style.display = 'flex'
}