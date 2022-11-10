const userInput = document.getElementById('email');
const passInput = document.getElementById('password');
const submit1 = document.getElementById('submitlogin');

//console.log(submit1);


///////////   LOGIN

//que se muestre el username
chrome.storage.sync.get(['email'], function(result) {userInput.value = result.email;});

//que se muestre la password
chrome.storage.sync.get(['password'], function(result) {passInput.value = result.password;});

//guardamos los datos apretando el boton
submit1.addEventListener("click", function(){
  chrome.storage.sync.set({ email: userInput.value });
  chrome.storage.sync.set({ password: passInput.value });
}); 

//chrome.storage.sync.get(['email'], function(result) {console.log('Value currently is ' + result.email);});
//  localStorage, Cookies, WebSql, Chrome.storage

///////////   CURSOS

const listacursos = ["c111", "c222", "c333", "c444"];

var table = document.createElement("table"), row, cellA, cellB;
document.getElementById("lista").appendChild(table);
for (let key = 0; key < listacursos.length; key++) {
  // (C2) ROWS & CELLS
  row = table.insertRow();
  cellA = row.insertCell();
  cellB = row.insertCell();

  // (C3) KEY & VALUE
  cellA.innerHTML = listacursos[key];
  cellB.innerHTML = "";

  var input = document.createElement("input");
  input.type = "checkbox";
  input.id = "checkbox" + String(key);

  cellB.appendChild(input);
}





