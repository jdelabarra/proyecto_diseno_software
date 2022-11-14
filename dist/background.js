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
        //chrome.tabs.insertCSS(current_tab_info.id, {file: "./loadingscreen.css"});
        chrome.storage.sync.get('email', function (data) {
          chrome.storage.sync.get('password', function (data2) {
            chrome.tabs.executeScript(current_tab_info.id, {
              code: "\n                        setTimeout(function() {\n                            var email = document.getElementById('username');\n                            var password = document.getElementById('password');\n                            var btn = document.getElementById('loginbtn');\n                            email.value = '" + data['email'] + "';\n                            email.dispatchEvent(new Event('input'));\n                            password.value = '" + data2['password'] + "';\n                            password.dispatchEvent(new Event('input'));\n                            btn.click();\n                            console.log('login listo');\n                        }, 5);\n                        "
            });
          });
        });
      }
      if (current_tab_info.url.endsWith('.cl/')) {
        chrome.storage.sync.get('listaCursos', function (data) {
          if (data == 'undefined') {
            console.log('buscando cursos');
            //chrome.tabs.update({url: "https://webc.uai.cl/course/index.php?mycourses=1"});
            chrome.tabs.executeScript(current_tab_info.id, {
              code: "\n                            let a = '', b = '', c = false;\n                            let obj = [];\n                            for(var i = 0; i < document.getElementsByClassName('coursename').length; i++){\n                                a=String(document.getElementsByClassName('coursename')[i].children[0].href.slice(-4))\n                                b= document.getElementsByClassName('coursename')[i].children[0].text;\n                                obj[i] = [a, b, c]\n                            };\n                            //console.log(obj);\n                            chrome.storage.sync.set({ listaCursos: obj });\n                            "
            });
            //localStorage.setItem('data', obj);
            //var personFromStorage = localStorage.getItem(key);
          } else {
            console.log('ya tenemos los cursos');
            //redirige al menu
            chrome.tabs.update({
              url: chrome.extension.getURL("./home.html")
            });
          }
        });
      }
    }
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxHQUFHO0FBQ1BDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBRSxVQUFBSixHQUFHLEVBQUk7RUFDdENDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRyxHQUFHLENBQUNMLEdBQUcsRUFBRSxVQUFBTSxnQkFBZ0IsRUFBSTtJQUNyQyxJQUFLLDBCQUEwQixDQUFDQyxJQUFJLENBQUNELGdCQUFnQixDQUFDRSxHQUFHLENBQUMsRUFBRTtNQUV4RDs7TUFFQTtNQUNBO01BQ0E7TUFDQTs7TUFHQTs7TUFFQSxJQUFNRixnQkFBZ0IsQ0FBQ0UsR0FBRyxDQUFDQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRztRQUN0RDtRQUNBUixNQUFNLENBQUNTLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDTixHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVVPLElBQUksRUFBRTtVQUM3Q1gsTUFBTSxDQUFDUyxPQUFPLENBQUNDLElBQUksQ0FBQ04sR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVUSxLQUFLLEVBQUU7WUFDakRaLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWSxhQUFhLENBQ3pCUixnQkFBZ0IsQ0FBQ1MsRUFBRSxFQUNuQjtjQUNBQyxJQUFJLEVBQUUsOFVBS2VKLElBQUksQ0FBQyxPQUFPLENBQUMsNkhBRVgsR0FBQ0MsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQU16QyxDQUFDLENBQUM7VUFDTixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDTjtNQUVBLElBQU1QLGdCQUFnQixDQUFDRSxHQUFHLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRztRQUMxQ1IsTUFBTSxDQUFDUyxPQUFPLENBQUNDLElBQUksQ0FBQ04sR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVTyxJQUFJLEVBQUU7VUFDbkQsSUFBTUEsSUFBSSxJQUFJLFdBQVcsRUFBRztZQUN4QkssT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7WUFDOUI7WUFDQWpCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWSxhQUFhLENBQ3JCUixnQkFBZ0IsQ0FBQ1MsRUFBRSxFQUNuQjtjQUNBQyxJQUFJO1lBV0osQ0FBQyxDQUFDO1lBQ047WUFDQTtVQUNKLENBQUMsTUFBTTtZQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQztZQUNBakIsTUFBTSxDQUFDQyxJQUFJLENBQUNpQixNQUFNLENBQUM7Y0FBQ1gsR0FBRyxFQUFFUCxNQUFNLENBQUNtQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhO1lBQUMsQ0FBQyxDQUFDO1VBQ3JFO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSjtFQU1KLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG9fZHMvLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2FsIGluc3RhbGFyXHJcbi8vY29uc29sZS5sb2coXCJmcm9tIGJhY2tncm91bmRcIilcclxuLy9jaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KG51bGwsIHtmaWxlOiBcIi4vZm9yZWdyb3VuZC5qc1wifSwgbnVsbClcclxuXHJcbnZhciB0YWJcclxuY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCB0YWIgPT4ge1xyXG4gICAgY2hyb21lLnRhYnMuZ2V0KHRhYiwgY3VycmVudF90YWJfaW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCAvXmh0dHBzOlxcL1xcL3dlYmNcXC51YWlcXC5jbC8udGVzdChjdXJyZW50X3RhYl9pbmZvLnVybCkgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY2hyb21lLnRhYnMuaW5zZXJ0Q1NTKGN1cnJlbnRfdGFiX2luZm8uaWQsIHtmaWxlOiBcIi4vY29tcG9uZW50cy9sb2FkaW5nc2NyZWVuLmNzc1wifSk7XHJcblxyXG4gICAgICAgICAgICAvLy8vLy8vY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChjdXJyZW50X3RhYl9pbmZvLmlkLCB7ZmlsZTogXCIuL2ZvcmVncm91bmQuanNcIn0sICgpID0+IGNvbnNvbGUubG9nKGN1cnJlbnRfdGFiX2luZm8udXJsKSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJyZW50X3RhYl9pbmZvLnVybClcclxuICAgICAgICAgICAgLy9jaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KG51bGwsIHtmaWxlOiBcIi4vZm9yZWlnbi5qc1wifSwgKCkgPT4gY29uc29sZS5sb2coY3VycmVudF90YWJfaW5mby51cmwpKVxyXG4gICAgICAgICAgICAvL2xvZ2luL2luZGV4LnBocFxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2VtYWlsJywgZnVuY3Rpb24gKGRhdGEpIHtjb25zb2xlLmxvZyhkYXRhKX0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCAoY3VycmVudF90YWJfaW5mby51cmwuZW5kc1dpdGgoJy9sb2dpbi9pbmRleC5waHAnKSkgKXtcclxuICAgICAgICAgICAgICAgIC8vY2hyb21lLnRhYnMuaW5zZXJ0Q1NTKGN1cnJlbnRfdGFiX2luZm8uaWQsIHtmaWxlOiBcIi4vbG9hZGluZ3NjcmVlbi5jc3NcIn0pO1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2VtYWlsJywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgncGFzc3dvcmQnLCBmdW5jdGlvbiAoZGF0YTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF90YWJfaW5mby5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbmJ0bicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwudmFsdWUgPSAnYCtkYXRhWydlbWFpbCddK2AnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQudmFsdWUgPSAnYCtkYXRhMlsncGFzc3dvcmQnXStgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGxpc3RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggKGN1cnJlbnRfdGFiX2luZm8udXJsLmVuZHNXaXRoKCcuY2wvJykpICl7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnbGlzdGFDdXJzb3MnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggKGRhdGEgPT0gJ3VuZGVmaW5lZCcpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdidXNjYW5kbyBjdXJzb3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Nocm9tZS50YWJzLnVwZGF0ZSh7dXJsOiBcImh0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL2luZGV4LnBocD9teWNvdXJzZXM9MVwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RhYl9pbmZvLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSAnJywgYiA9ICcnLCBjID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291cnNlbmFtZScpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhPVN0cmluZyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3Vyc2VuYW1lJylbaV0uY2hpbGRyZW5bMF0uaHJlZi5zbGljZSgtNCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYj0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291cnNlbmFtZScpW2ldLmNoaWxkcmVuWzBdLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gW2EsIGIsIGNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBsaXN0YUN1cnNvczogb2JqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBwZXJzb25Gcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3lhIHRlbmVtb3MgbG9zIGN1cnNvcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JlZGlyaWdlIGFsIG1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKHt1cmw6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiLi9ob21lLmh0bWxcIil9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsidGFiIiwiY2hyb21lIiwidGFicyIsIm9uVXBkYXRlZCIsImFkZExpc3RlbmVyIiwiZ2V0IiwiY3VycmVudF90YWJfaW5mbyIsInRlc3QiLCJ1cmwiLCJlbmRzV2l0aCIsInN0b3JhZ2UiLCJzeW5jIiwiZGF0YSIsImRhdGEyIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJleHRlbnNpb24iLCJnZXRVUkwiXSwic291cmNlUm9vdCI6IiJ9