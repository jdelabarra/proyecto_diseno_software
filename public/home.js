
const menuCursos = document.getElementById('menucursos');


chrome.storage.sync.get('listaCursos', function (data) {
  Array.prototype.forEach.call (data['listaCursos'], function (value) {
    if ( value[2] === true) {
      var divNode12 = document.createElement('div');
      divNode12.className = 'col-12';
      var anode = document.createElement('a');
      anode.innerHTML = String(value[1]);
      anode.href = 'https://webc.uai.cl/course/view.php?id=' + String(value[0]);
      divNode12.appendChild(anode);
      menuCursos.appendChild(divNode12);
    };
  });
});






/*

if ( current_tab_info.url == chrome.extension.getURL("./home.html")) {
    
  chrome.tabs.executeScript(
      current_tab_info.id,
      {
      code: `
          menuCursos = document.getElementById('menucursos');
          var divNode12 = document.createElement('div');
          divNode12.className = 'col-12';
          var anode = document.createElement('a');
          anode.innerHTML = 'asdasdasdasdas';
          anode.href = 'google.com';
          divNode12.appendChild(anode);
          menuCursos.appendChild(divNode12);
      `
      }
  );
}






*/