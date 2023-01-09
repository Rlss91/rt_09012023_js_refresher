window.addEventListener("load", () => {
  //when page finish to load
  document.getElementById("login-btn").addEventListener("click", () => {
    let exampleCheck1 = document.getElementById("exampleCheck1");
    if (exampleCheck1.checked) {
      console.log("remember me");
    } else {
      console.log("don't remember me");
    }
  });
  document.getElementById("exampleCheck1").addEventListener("change", (ev) => {
    console.log("change worked");
  });
});

localStorage.setItem("token", "123456789"); //create and or edit
localStorage.setItem("token2", "asdfghjkkl"); //create and or edit
let data = localStorage.getItem("token"); // get the data
console.log("🚀 ~ file: login.js:19 ~ data", data);
localStorage.removeItem("token2"); //remove item
localStorage.clear(); // clear the entire localStorage
// sessionStorage.setItem("token", "123456789");
