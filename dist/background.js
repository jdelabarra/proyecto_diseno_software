/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
//al instalar
//console.log("from background")
//chrome.tabs.executeScript(null, {file: "./foreground.js"}, null)

var tab;
chrome.tabs.onUpdated.addListener(function (tab) {
  chrome.tabs.get(tab, function (current_tab_info) {
    if (/^https:\/\/webc\.uai\.cl/.test(current_tab_info.url)) {
      //chrome.tabs.insertCSS(current_tab_info.id, {file: "./components/loadingscreen.css"});

      ///////chrome.tabs.executeScript(current_tab_info.id, {file: "./foreground.js"}, () => console.log(current_tab_info.url))
      //console.log(current_tab_info.url)
      //chrome.tabs.executeScript(null, {file: "./foreign.js"}, () => console.log(current_tab_info.url))
      //login/index.php

      //chrome.storage.sync.get('email', function (data) {console.log(data)});

      if (current_tab_info.url.endsWith('/login/index.php')) {
        chrome.storage.sync.get('email', function (data) {
          chrome.storage.sync.get('password', function (data2) {
            chrome.tabs.executeScript(current_tab_info.id, {
              code: "\n                        setTimeout(function() {\n                            var email = document.getElementById('username');\n                            var password = document.getElementById('password');\n                            var btn = document.getElementById('loginbtn');\n                            email.value = '" + data['email'] + "';\n                            email.dispatchEvent(new Event('input'));\n                            password.value = '" + data2['password'] + "';\n                            password.dispatchEvent(new Event('input'));\n                            btn.click();\n                            console.log('login listo');\n                        }, 5);\n                        "
            });
          });
        });
      }
      chrome.storage.sync.get('listaCursos', function (data) {
        if (data = 'undefined') {
          console.log('buscando cursos');
          //chrome.tabs.update({url: "https://webc.uai.cl/course/index.php?mycourses=1"});
          chrome.tabs.executeScript(current_tab_info.id, {
            code: "\n                        let a = '', b = '', c = false;\n                        let obj = [];\n                        for(var i = 0; i < document.getElementsByClassName('coursename').length; i++){\n                            a=String(document.getElementsByClassName('coursename')[i].children[0].href.slice(-4))\n                            b= document.getElementsByClassName('coursename')[i].children[0].text;\n                            obj[i] = [a, b, c]\n                        };\n                        console.log(obj);\n                        chrome.storage.sync.set({ listaCursos: obj });\n                        "
          });
          //localStorage.setItem('data', obj);
          //var personFromStorage = localStorage.getItem(key);
        } else {
          console.log('ya tenemos los cursos');
        }
      });

      //else if (  (current_tab_info.url).endsWith('/index.php?mycourses=1') ){

      /*   
                  if ( !(current_tab_info.url.endsWith('/menu/')) ){
                      chrome.tabs.update({url: "https://webc.uai.cl/menu/"});
                      chrome.tabs.insertCSS(current_tab_info.id, {file: "./home.html"});
                  }
      
                  //3
                  //chrome.storage.sync.set({listacursos:null})
                  //&& !chrome.storage.sync.get({listacursos})
                  if ( current_tab_info.status == 'complete'){
      
                      try {
                          chrome.storage.sync.get({listacursos})
                       }
                       catch (e) {
                          chrome.tabs.update({url: "https://webc.uai.cl/course/index.php?mycourses=1"});
                          var dictCursos = {};
                          for (var i = 0; i < 12; i++) {
                              dictCursos[i] = document.getElementsByClassName('col-lg-12')[i].firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent;
                           }
                      
                      chrome.storage.sync.set({listacursos:dictCursos})
                      //document.getElementsByClassName('col-lg-12')[0].firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent
                      //chrome.tabs.executeScript(null, {file: "./foreign.js"}, () => console.log(current_tab_info.url))
                      //{'DISEÑO DE SOFTWARE Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4529', 'FUNDAMENTOS DE REDES DE COMPUTADORES Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4288', 'INTELIGENCIA ARTIFICIAL Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4527', 'TALLER DE INNOVACIÓN Y EMPRENDIMIENTO TECNOLÓGICO Sec.10 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4136' }
      
      
                      }
                  }
      */

      //document.getElementsByClassName('col-lg-12')
      //.getText()
      //document.getElementsByClassName('col-lg-12')[0].firstElementChild.firstElementChild.firstElementChild.href
      //document.getElementsByClassName('col-lg-12')[0].firstElementChild.firstElementChild.firstElementChild.ariaLabel
      //
      //document.getElementsByClassName('col-lg-12')[0].firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.href
      //0-11
      //document.getElementsByClassName('col-lg-12')[0].firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent
      //document.getElementsByClassName('page-link btn')[2].ariaLabel
      //Next

      //.includes('Sec.')
      //aa.slice(0, (aa.search('Sec.')+5) )
    }
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxHQUFHO0FBQ1BDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBRSxVQUFBSixHQUFHLEVBQUk7RUFDdENDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRyxHQUFHLENBQUNMLEdBQUcsRUFBRSxVQUFBTSxnQkFBZ0IsRUFBSTtJQUNyQyxJQUFLLDBCQUEwQixDQUFDQyxJQUFJLENBQUNELGdCQUFnQixDQUFDRSxHQUFHLENBQUMsRUFBRTtNQUN4RDs7TUFFQTtNQUNBO01BQ0E7TUFDQTs7TUFHQTs7TUFFQSxJQUFNRixnQkFBZ0IsQ0FBQ0UsR0FBRyxDQUFDQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRztRQUN0RFIsTUFBTSxDQUFDUyxPQUFPLENBQUNDLElBQUksQ0FBQ04sR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVTyxJQUFJLEVBQUU7VUFDN0NYLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDQyxJQUFJLENBQUNOLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVVEsS0FBSyxFQUFFO1lBQ2pEWixNQUFNLENBQUNDLElBQUksQ0FBQ1ksYUFBYSxDQUN6QlIsZ0JBQWdCLENBQUNTLEVBQUUsRUFDbkI7Y0FDQUMsSUFBSSxFQUFFLDhVQUtlSixJQUFJLENBQUMsT0FBTyxDQUFDLDZIQUVYLEdBQUNDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFNekMsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO01BQ047TUFDQVosTUFBTSxDQUFDUyxPQUFPLENBQUNDLElBQUksQ0FBQ04sR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVTyxJQUFJLEVBQUU7UUFDbkQsSUFBTUEsSUFBSSxHQUFHLFdBQVcsRUFBRztVQUN2QkssT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7VUFDOUI7VUFDQWpCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWSxhQUFhLENBQ3JCUixnQkFBZ0IsQ0FBQ1MsRUFBRSxFQUNuQjtZQUNBQyxJQUFJO1VBV0osQ0FBQyxDQUFDO1VBQ047VUFDQTtRQUNKLENBQUMsTUFBTTtVQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztRQUN4QztNQUVKLENBQUMsQ0FBQzs7TUFLRjs7TUFJWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BSVk7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7TUFDQTtJQUVKO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0b19kcy8uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vYWwgaW5zdGFsYXJcclxuLy9jb25zb2xlLmxvZyhcImZyb20gYmFja2dyb3VuZFwiKVxyXG4vL2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQobnVsbCwge2ZpbGU6IFwiLi9mb3JlZ3JvdW5kLmpzXCJ9LCBudWxsKVxyXG5cclxudmFyIHRhYlxyXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoIHRhYiA9PiB7XHJcbiAgICBjaHJvbWUudGFicy5nZXQodGFiLCBjdXJyZW50X3RhYl9pbmZvID0+IHtcclxuICAgICAgICBpZiAoIC9eaHR0cHM6XFwvXFwvd2ViY1xcLnVhaVxcLmNsLy50ZXN0KGN1cnJlbnRfdGFiX2luZm8udXJsKSApe1xyXG4gICAgICAgICAgICAvL2Nocm9tZS50YWJzLmluc2VydENTUyhjdXJyZW50X3RhYl9pbmZvLmlkLCB7ZmlsZTogXCIuL2NvbXBvbmVudHMvbG9hZGluZ3NjcmVlbi5jc3NcIn0pO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vL2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoY3VycmVudF90YWJfaW5mby5pZCwge2ZpbGU6IFwiLi9mb3JlZ3JvdW5kLmpzXCJ9LCAoKSA9PiBjb25zb2xlLmxvZyhjdXJyZW50X3RhYl9pbmZvLnVybCkpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY3VycmVudF90YWJfaW5mby51cmwpXHJcbiAgICAgICAgICAgIC8vY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChudWxsLCB7ZmlsZTogXCIuL2ZvcmVpZ24uanNcIn0sICgpID0+IGNvbnNvbGUubG9nKGN1cnJlbnRfdGFiX2luZm8udXJsKSlcclxuICAgICAgICAgICAgLy9sb2dpbi9pbmRleC5waHBcclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvL2Nocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdlbWFpbCcsIGZ1bmN0aW9uIChkYXRhKSB7Y29uc29sZS5sb2coZGF0YSl9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggKGN1cnJlbnRfdGFiX2luZm8udXJsLmVuZHNXaXRoKCcvbG9naW4vaW5kZXgucGhwJykpICl7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnZW1haWwnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdwYXNzd29yZCcsIGZ1bmN0aW9uIChkYXRhMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RhYl9pbmZvLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luYnRuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbC52YWx1ZSA9ICdgK2RhdGFbJ2VtYWlsJ10rYCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZC52YWx1ZSA9ICdgK2RhdGEyWydwYXNzd29yZCddK2AnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gbGlzdG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnbGlzdGFDdXJzb3MnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAoZGF0YSA9ICd1bmRlZmluZWQnKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdidXNjYW5kbyBjdXJzb3MnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hyb21lLnRhYnMudXBkYXRlKHt1cmw6IFwiaHR0cHM6Ly93ZWJjLnVhaS5jbC9jb3Vyc2UvaW5kZXgucGhwP215Y291cnNlcz0xXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RhYl9pbmZvLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSAnJywgYiA9ICcnLCBjID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdXJzZW5hbWUnKS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhPVN0cmluZyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3Vyc2VuYW1lJylbaV0uY2hpbGRyZW5bMF0uaHJlZi5zbGljZSgtNCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3Vyc2VuYW1lJylbaV0uY2hpbGRyZW5bMF0udGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IFthLCBiLCBjXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGxpc3RhQ3Vyc29zOiBvYmogfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgcGVyc29uRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygneWEgdGVuZW1vcyBsb3MgY3Vyc29zJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvL2Vsc2UgaWYgKCAgKGN1cnJlbnRfdGFiX2luZm8udXJsKS5lbmRzV2l0aCgnL2luZGV4LnBocD9teWNvdXJzZXM9MScpICl7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbi8qICAgXHJcbiAgICAgICAgICAgIGlmICggIShjdXJyZW50X3RhYl9pbmZvLnVybC5lbmRzV2l0aCgnL21lbnUvJykpICl7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUudGFicy51cGRhdGUoe3VybDogXCJodHRwczovL3dlYmMudWFpLmNsL21lbnUvXCJ9KTtcclxuICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLmluc2VydENTUyhjdXJyZW50X3RhYl9pbmZvLmlkLCB7ZmlsZTogXCIuL2hvbWUuaHRtbFwifSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vM1xyXG4gICAgICAgICAgICAvL2Nocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtsaXN0YWN1cnNvczpudWxsfSlcclxuICAgICAgICAgICAgLy8mJiAhY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe2xpc3RhY3Vyc29zfSlcclxuICAgICAgICAgICAgaWYgKCBjdXJyZW50X3RhYl9pbmZvLnN0YXR1cyA9PSAnY29tcGxldGUnKXtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHtsaXN0YWN1cnNvc30pXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKHt1cmw6IFwiaHR0cHM6Ly93ZWJjLnVhaS5jbC9jb3Vyc2UvaW5kZXgucGhwP215Y291cnNlcz0xXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGljdEN1cnNvcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWN0Q3Vyc29zW2ldID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sLWxnLTEyJylbaV0uZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7bGlzdGFjdXJzb3M6ZGljdEN1cnNvc30pXHJcbiAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbC1sZy0xMicpWzBdLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgICAgIC8vY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChudWxsLCB7ZmlsZTogXCIuL2ZvcmVpZ24uanNcIn0sICgpID0+IGNvbnNvbGUubG9nKGN1cnJlbnRfdGFiX2luZm8udXJsKSlcclxuICAgICAgICAgICAgICAgIC8veydESVNFw5FPIERFIFNPRlRXQVJFIFNlYy4xIFNUR08gUy1TRU0uIDIwMjIvMic6ICdodHRwczovL3dlYmMudWFpLmNsL2NvdXJzZS92aWV3LnBocD9pZD00NTI5JywgJ0ZVTkRBTUVOVE9TIERFIFJFREVTIERFIENPTVBVVEFET1JFUyBTZWMuMSBTVEdPIFMtU0VNLiAyMDIyLzInOiAnaHR0cHM6Ly93ZWJjLnVhaS5jbC9jb3Vyc2Uvdmlldy5waHA/aWQ9NDI4OCcsICdJTlRFTElHRU5DSUEgQVJUSUZJQ0lBTCBTZWMuMSBTVEdPIFMtU0VNLiAyMDIyLzInOiAnaHR0cHM6Ly93ZWJjLnVhaS5jbC9jb3Vyc2Uvdmlldy5waHA/aWQ9NDUyNycsICdUQUxMRVIgREUgSU5OT1ZBQ0nDk04gWSBFTVBSRU5ESU1JRU5UTyBURUNOT0zDk0dJQ08gU2VjLjEwIFNUR08gUy1TRU0uIDIwMjIvMic6ICdodHRwczovL3dlYmMudWFpLmNsL2NvdXJzZS92aWV3LnBocD9pZD00MTM2JyB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4qL1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbC1sZy0xMicpXHJcbiAgICAgICAgICAgIC8vLmdldFRleHQoKVxyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbC1sZy0xMicpWzBdLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmhyZWZcclxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wtbGctMTInKVswXS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5hcmlhTGFiZWxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wtbGctMTInKVswXS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmhyZWZcclxuICAgICAgICAgICAgLy8wLTExXHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sLWxnLTEyJylbMF0uZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UtbGluayBidG4nKVsyXS5hcmlhTGFiZWxcclxuICAgICAgICAgICAgLy9OZXh0XHJcblxyXG4gICAgICAgICAgICAvLy5pbmNsdWRlcygnU2VjLicpXHJcbiAgICAgICAgICAgIC8vYWEuc2xpY2UoMCwgKGFhLnNlYXJjaCgnU2VjLicpKzUpIClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsidGFiIiwiY2hyb21lIiwidGFicyIsIm9uVXBkYXRlZCIsImFkZExpc3RlbmVyIiwiZ2V0IiwiY3VycmVudF90YWJfaW5mbyIsInRlc3QiLCJ1cmwiLCJlbmRzV2l0aCIsInN0b3JhZ2UiLCJzeW5jIiwiZGF0YSIsImRhdGEyIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9