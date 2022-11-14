
const userInput = document.getElementById('email');
const passInput = document.getElementById('password');
const submit1 = document.getElementById('submitlogin');
const cursosDisplay = document.getElementById('displaycursos');
const eachCurso = document.getElementsByClassName('cadacurso');

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
  window.open('https://webc.uai.cl/login/index.php');
}); 

//chrome.storage.sync.get(['email'], function(result) {console.log('Value currently is ' + result.email);});
//  localStorage, Cookies, WebSql, Chrome.storage

/////////// CARGAR CURSOS

chrome.storage.sync.get('listaCursos', function (data) {
  if ( (data != 'undefined') ){
    for(var i = 0; i < data['listaCursos'].length; i++){
      //console.log(data['listaCursos'][i][0]);
      //chrome.tabs.insertCSS(current_tab_info.id, {file: "./components/loadingscreen.css"});
      
      //CREA HTML PARA CADA CURSO
      var divNodeMain = document.createElement('div');
      divNodeMain.className = 'col-12';
      divNodeMain.id = 'curso-'+String(i);
      var divNodeRow = document.createElement('div');
      divNodeRow.className = 'form-group row';
      var divNodeCheckbox = document.createElement('div');
      divNodeCheckbox.className = 'col-md-1 col-1';
      var inputNode = document.createElement('input');
      inputNode.type = 'checkbox';
      inputNode.className = 'form-check-input cadacurso';
      inputNode.id = 'checkbox-curso-'+String(i);
      divNodeCheckbox.appendChild(inputNode);
      var divNodeTitulo = document.createElement('div');
      divNodeTitulo.className = 'col-md-11 col-10';
      var pNodeTitulo = document.createElement('p');
      pNodeTitulo.innerHTML = String(data['listaCursos'][i][1]);
      divNodeTitulo.appendChild(pNodeTitulo);
      divNodeRow.appendChild(divNodeCheckbox);
      divNodeRow.appendChild(divNodeTitulo);
      divNodeMain.appendChild(divNodeRow);
      //INSERTAR HTML
      cursosDisplay.children[0].appendChild(divNodeMain)
  };
    
  Array.prototype.forEach.call (eachCurso, function (checkbox,index) {
    checkbox.addEventListener('change', function() {
      chrome.storage.sync.get('listaCursos', function (data) {
        if ( (data != 'undefined') ){
          data['listaCursos'][index][2] = checkbox.checked;
          chrome.storage.sync.set({ listaCursos: data['listaCursos']});
        };
      });
    });
  });
  }
});

//buscar los valores de checkbox y mostrarlos
chrome.storage.sync.get('listaCursos', function (data) {
  if ( (data != 'undefined') ){
    console.log(data)
    for(var i = 0; i < data['listaCursos'].length-1; i++){
      eachCurso[i].checked =  data['listaCursos'][i][2];
      //console.log(i, eachCurso[i].checked, data['listaCursos'][i][2] );
    };
  };
});


/* 

    chrome.storage.sync.get('listaCursos', function (data) {
      if ( (data != 'undefined') ){
        data['listaCursos'][index][2] = checkbox.checked;
        chrome.storage.sync.set({ listaCursos: data['listaCursos']});
      };
    });


save before domingo

chrome.storage.sync.get('listaCursos', function (data) {
  if ( (data != 'undefined') ){
    for(var i = 0; i < data['listaCursos'].length-1; i++){
      //cursosDisplay
      cursosDisplay.getElementsByTagName('input')[i].checked =  data['listaCursos'][i][2];
      console.log(data['listaCursos'][i][2]);
      cursosDisplay.getElementsByTagName('input')[i].addEventListener("change", function(){
        data['listaCursos'][i][2] = this.checked;
        console.log(data[this.checked])
        console.log(data['listaCursos'])
        chrome.storage.sync.set({ listaCursos: data['listaCursos']});
      });
    };
  }
});



*/ 









/* 

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

*/ 



