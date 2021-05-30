// function redirect(web) {
//   window.location.href = web;
// }
// redirect("https://www.google.com/");

function setData(name, age) {
  localStorage.setItem("name", name);
  localStorage.setItem("age", age + "");
}
setData("Aleksandar", 29);

function getData(arr) {
  arr.forEach(function (element) {
    if (localStorage.getItem(element) === null) {
      console.log("There is no data!");
    } else {
      console.log(localStorage.getItem(element));
    }
  });
}

getData(["name", "age", "school"]);

function removeData(key) {
  localStorage.removeItem(key);
}

removeData("age");

// function setSessData(name, age) {
//   sessionStorage.setItem("name", name);
//   sessionStorage.setItem("age", age + "");
// }
// setSessData("Aleksandar", 29);

// function getData(...args) {
//   args.forEach(function (element) {
//     if (sessionStorage.getItem(element) === null) {
//       console.log("There is no data!");
//     } else {
//       console.log(sessionStorage.getItem(element));
//     }
//   });
// }

// getData("name", "age", "school");

// function removeData(key) {
//   sessionStorage.removeItem(key);
// }

/*
window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back.
*/

function goTwoPagesBack() {
  window.history.go(-2);
}
//goTwoPagesBack();

/*
Window Methods

● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer is used in the confirm
dialog
● The format of the message in the dialog should be: &quot;We will submit this
answer now! &quot; + the answer
● If the user clicks OK, show alert with success message
● If the user clicks Cancel, don&#39;t show anything
*/

function sayHallo() {
  alert("Hi!");
}
sayHallo();

function askName() {
  var visitorName = prompt("Kako se zoveš?");
  var validate = confirm("We will sumbit the answer now! " + visitorName);
  if (validate) {
    alert("Success!");
  }
}
askName();
