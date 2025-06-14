console.log("Hello, World!");
const userInput = "<script>alert('Hacked!')</script>";
document.body.innerHTML = "Welcome " + userInput;