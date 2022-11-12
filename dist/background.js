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

      if (current_tab_info.status == 'complete' && current_tab_info.url.endsWith('/login/index.php')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxHQUFHO0FBQ1BDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBRSxVQUFBSixHQUFHLEVBQUk7RUFDdENDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRyxHQUFHLENBQUNMLEdBQUcsRUFBRSxVQUFBTSxnQkFBZ0IsRUFBSTtJQUNyQyxJQUFLLDBCQUEwQixDQUFDQyxJQUFJLENBQUNELGdCQUFnQixDQUFDRSxHQUFHLENBQUMsRUFBRTtNQUN4RDs7TUFFQTtNQUNBO01BQ0E7TUFDQTs7TUFHQTs7TUFFQSxJQUFNRixnQkFBZ0IsQ0FBQ0csTUFBTSxJQUFJLFVBQVUsSUFBTUgsZ0JBQWdCLENBQUNFLEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLGtCQUFrQixDQUFFLEVBQUU7UUFDakdULE1BQU0sQ0FBQ1UsT0FBTyxDQUFDQyxJQUFJLENBQUNQLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVVEsSUFBSSxFQUFFO1VBQzdDWixNQUFNLENBQUNVLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDUCxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVVTLEtBQUssRUFBRTtZQUNqRGIsTUFBTSxDQUFDQyxJQUFJLENBQUNhLGFBQWEsQ0FDekJULGdCQUFnQixDQUFDVSxFQUFFLEVBQ25CO2NBQ0FDLElBQUksRUFBRSw4VUFLZUosSUFBSSxDQUFDLE9BQU8sQ0FBQyw2SEFFWCxHQUFDQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBTXpDLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztNQUNOO01BQ0FiLE1BQU0sQ0FBQ1UsT0FBTyxDQUFDQyxJQUFJLENBQUNQLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVVEsSUFBSSxFQUFFO1FBQ25ELElBQU1BLElBQUksR0FBRyxXQUFXLEVBQUc7VUFDdkJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1VBQzlCO1VBQ0FsQixNQUFNLENBQUNDLElBQUksQ0FBQ2EsYUFBYSxDQUNyQlQsZ0JBQWdCLENBQUNVLEVBQUUsRUFDbkI7WUFDQUMsSUFBSTtVQVdKLENBQUMsQ0FBQztVQUNOO1VBQ0E7UUFDSixDQUFDLE1BQU07VUFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7UUFDeEM7TUFDSixDQUFDLENBQUM7O01BS0Y7O01BSVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BSVk7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7TUFDQTtJQUVKO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0b19kcy8uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vYWwgaW5zdGFsYXJcclxuLy9jb25zb2xlLmxvZyhcImZyb20gYmFja2dyb3VuZFwiKVxyXG4vL2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQobnVsbCwge2ZpbGU6IFwiLi9mb3JlZ3JvdW5kLmpzXCJ9LCBudWxsKVxyXG5cclxudmFyIHRhYlxyXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoIHRhYiA9PiB7XHJcbiAgICBjaHJvbWUudGFicy5nZXQodGFiLCBjdXJyZW50X3RhYl9pbmZvID0+IHtcclxuICAgICAgICBpZiAoIC9eaHR0cHM6XFwvXFwvd2ViY1xcLnVhaVxcLmNsLy50ZXN0KGN1cnJlbnRfdGFiX2luZm8udXJsKSApe1xyXG4gICAgICAgICAgICAvL2Nocm9tZS50YWJzLmluc2VydENTUyhjdXJyZW50X3RhYl9pbmZvLmlkLCB7ZmlsZTogXCIuL2NvbXBvbmVudHMvbG9hZGluZ3NjcmVlbi5jc3NcIn0pO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vL2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoY3VycmVudF90YWJfaW5mby5pZCwge2ZpbGU6IFwiLi9mb3JlZ3JvdW5kLmpzXCJ9LCAoKSA9PiBjb25zb2xlLmxvZyhjdXJyZW50X3RhYl9pbmZvLnVybCkpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY3VycmVudF90YWJfaW5mby51cmwpXHJcbiAgICAgICAgICAgIC8vY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChudWxsLCB7ZmlsZTogXCIuL2ZvcmVpZ24uanNcIn0sICgpID0+IGNvbnNvbGUubG9nKGN1cnJlbnRfdGFiX2luZm8udXJsKSlcclxuICAgICAgICAgICAgLy9sb2dpbi9pbmRleC5waHBcclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvL2Nocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdlbWFpbCcsIGZ1bmN0aW9uIChkYXRhKSB7Y29uc29sZS5sb2coZGF0YSl9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggKGN1cnJlbnRfdGFiX2luZm8uc3RhdHVzID09ICdjb21wbGV0ZScpICYmIChjdXJyZW50X3RhYl9pbmZvLnVybC5lbmRzV2l0aCgnL2xvZ2luL2luZGV4LnBocCcpKSApe1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2VtYWlsJywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgncGFzc3dvcmQnLCBmdW5jdGlvbiAoZGF0YTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF90YWJfaW5mby5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbmJ0bicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwudmFsdWUgPSAnYCtkYXRhWydlbWFpbCddK2AnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQudmFsdWUgPSAnYCtkYXRhMlsncGFzc3dvcmQnXStgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGxpc3RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2xpc3RhQ3Vyc29zJywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICggKGRhdGEgPSAndW5kZWZpbmVkJykgKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnVzY2FuZG8gY3Vyc29zJylcclxuICAgICAgICAgICAgICAgICAgICAvL2Nocm9tZS50YWJzLnVwZGF0ZSh7dXJsOiBcImh0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL2luZGV4LnBocD9teWNvdXJzZXM9MVwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF90YWJfaW5mby5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhID0gJycsIGIgPSAnJywgYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3Vyc2VuYW1lJykubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYT1TdHJpbmcoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291cnNlbmFtZScpW2ldLmNoaWxkcmVuWzBdLmhyZWYuc2xpY2UoLTQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYj0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291cnNlbmFtZScpW2ldLmNoaWxkcmVuWzBdLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbaV0gPSBbYSwgYiwgY11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBsaXN0YUN1cnNvczogb2JqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIHBlcnNvbkZyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3lhIHRlbmVtb3MgbG9zIGN1cnNvcycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy9lbHNlIGlmICggIChjdXJyZW50X3RhYl9pbmZvLnVybCkuZW5kc1dpdGgoJy9pbmRleC5waHA/bXljb3Vyc2VzPTEnKSApe1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4vKiBcclxuICAgICAgICAgICAgLy8zXHJcbiAgICAgICAgICAgIC8vY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe2xpc3RhY3Vyc29zOm51bGx9KVxyXG4gICAgICAgICAgICAvLyYmICFjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh7bGlzdGFjdXJzb3N9KVxyXG4gICAgICAgICAgICBpZiAoIGN1cnJlbnRfdGFiX2luZm8uc3RhdHVzID09ICdjb21wbGV0ZScpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe2xpc3RhY3Vyc29zfSlcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUudGFicy51cGRhdGUoe3VybDogXCJodHRwczovL3dlYmMudWFpLmNsL2NvdXJzZS9pbmRleC5waHA/bXljb3Vyc2VzPTFcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWN0Q3Vyc29zID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpY3RDdXJzb3NbaV0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wtbGctMTInKVtpXS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtsaXN0YWN1cnNvczpkaWN0Q3Vyc29zfSlcclxuICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sLWxnLTEyJylbMF0uZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgLy9jaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KG51bGwsIHtmaWxlOiBcIi4vZm9yZWlnbi5qc1wifSwgKCkgPT4gY29uc29sZS5sb2coY3VycmVudF90YWJfaW5mby51cmwpKVxyXG4gICAgICAgICAgICAgICAgLy97J0RJU0XDkU8gREUgU09GVFdBUkUgU2VjLjEgU1RHTyBTLVNFTS4gMjAyMi8yJzogJ2h0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL3ZpZXcucGhwP2lkPTQ1MjknLCAnRlVOREFNRU5UT1MgREUgUkVERVMgREUgQ09NUFVUQURPUkVTIFNlYy4xIFNUR08gUy1TRU0uIDIwMjIvMic6ICdodHRwczovL3dlYmMudWFpLmNsL2NvdXJzZS92aWV3LnBocD9pZD00Mjg4JywgJ0lOVEVMSUdFTkNJQSBBUlRJRklDSUFMIFNlYy4xIFNUR08gUy1TRU0uIDIwMjIvMic6ICdodHRwczovL3dlYmMudWFpLmNsL2NvdXJzZS92aWV3LnBocD9pZD00NTI3JywgJ1RBTExFUiBERSBJTk5PVkFDScOTTiBZIEVNUFJFTkRJTUlFTlRPIFRFQ05PTMOTR0lDTyBTZWMuMTAgU1RHTyBTLVNFTS4gMjAyMi8yJzogJ2h0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL3ZpZXcucGhwP2lkPTQxMzYnIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiovXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sLWxnLTEyJylcclxuICAgICAgICAgICAgLy8uZ2V0VGV4dCgpXHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sLWxnLTEyJylbMF0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaHJlZlxyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbC1sZy0xMicpWzBdLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmFyaWFMYWJlbFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbC1sZy0xMicpWzBdLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaHJlZlxyXG4gICAgICAgICAgICAvLzAtMTFcclxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wtbGctMTInKVswXS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50XHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnZS1saW5rIGJ0bicpWzJdLmFyaWFMYWJlbFxyXG4gICAgICAgICAgICAvL05leHRcclxuXHJcbiAgICAgICAgICAgIC8vLmluY2x1ZGVzKCdTZWMuJylcclxuICAgICAgICAgICAgLy9hYS5zbGljZSgwLCAoYWEuc2VhcmNoKCdTZWMuJykrNSkgKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ0YWIiLCJjaHJvbWUiLCJ0YWJzIiwib25VcGRhdGVkIiwiYWRkTGlzdGVuZXIiLCJnZXQiLCJjdXJyZW50X3RhYl9pbmZvIiwidGVzdCIsInVybCIsInN0YXR1cyIsImVuZHNXaXRoIiwic3RvcmFnZSIsInN5bmMiLCJkYXRhIiwiZGF0YTIiLCJleGVjdXRlU2NyaXB0IiwiaWQiLCJjb2RlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=