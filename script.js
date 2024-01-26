function getNav() {
  fetch("./components/header.html")
    .then((p) => p.text())
    .then((p) => {
      console.log(p);
      document.getElementById("pagenav").innerHTML = p;

      setauth();
    });
}

function setauth() {
  let navsignup = document.getElementById("navsignup");
  let navlogin = document.getElementById("navlogin");
  let navlogout = document.getElementById("navlogout");
  let navusername = document.getElementById("navusername");
  if (localStorage.getItem("userdata")) {
    let username = localStorage.getItem("userdata");
    username = JSON.parse(username);

    navsignup.style.display = 'none';
    navlogin.style.display = 'none';
    navlogout.style.display = 'inline-block';
    navusername.style.display = 'inline-block';
    navusername.innerHTML = username.name;
  } else {
   
    navsignup.style.display = 'inline-block';
    navlogin.style.display = 'inline-block';
    navlogout.style.display = 'none';
    navusername.style.display = 'none';
    navusername.innerHTML = "";
  }
}

getNav();

function getauth() {
  fetch("./components/authentication.html")
    .then((p) => p.text())
    .then((p) => {
      console.log(p);
      document.body.innerHTML += p;

      const thisForm = document.getElementById("signup");
      thisForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(thisForm);

        fetch("./php/signup.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
            if (data == "true") {
              closeauth();
              alert("Account create successfully");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });

      //Login page

      const thisForm2 = document.getElementById("login");
      thisForm2.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(thisForm2);

        fetch("./php/login.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
            if (data != "false") {
              closeauth();
              let userdata = JSON.parse(data);
              localStorage.setItem("userdata", data);
              window.location.reload();
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    });
  };

getauth();

function closeauth() {
  document.getElementById("auth2").style.display = "none";
}

function openlogin() {
  document.getElementById("auth2").style.display = "flex";
  document.getElementById("login").style.display = "flex";
  document.getElementById("signup").style.display = "none";
}

function opensignup() {
  document.getElementById("auth2").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "flex";
}

//logout

function logout(){
  localStorage.removeItem('userdata');
  window.location.reload();
}


