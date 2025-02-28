
 burger = document.querySelector('.burger');
 navbar = document.querySelector('.navbar');
 navlist = document.querySelector('.nav-list');
 rightNav = document.querySelector('.rightNav'); 

burger.addEventListener('click', () => {
  rightNav.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
});

// function submitData(){
// let name = document.getElementById("text").value;
// let email = document.getElementById("email").value;
// let number = document.getElementById("number").value;

// if(name==""||email==""||number==""){
//   alert("please fill out all values")
// }
// else{
//   let userAllData = {
//     myname:name,
//     myemail:email,
//     myphone:phone
//   }
//   console.log(userAllData);
// }
//  name = document.getElementById("text").value = "";
// email = document.getElementById("email").value = "";
//  number = document.getElementById("username").value = "";
// }
function submitData() {
  let name = document.getElementById("text").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  if (name == "" || email == "" || number == "") {
    alert("Please fill out all values");
  } else {
    let userAllData = {
      myname: name,
      myemail: email,
      mynumber: number // Corrected to 'mynumber'
    };
    console.log(userAllData);
  }

  // Reset the input fields after submission
  document.getElementById("text").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = ""; // Corrected this line
}
