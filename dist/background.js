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
          if (typeof data['listaCursos'] == 'undefined') {
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
            //document.getElementsByTagName('body')[0].replaceWith('<body>asdas</body>')
          }
        });
      }

      if (/course/.test(current_tab_info.url)) {
        //console.log(current_tab_info.url.slice(-4))
        //document.getElementsByClassName('topics')[0]
        chrome.storage.sync.set({
          listaCursos: obj
        });
        chrome.tabs.executeScript(current_tab_info.id, {
          code: "document.getElementsByTagName('body')[0].replaceWith('<body>asdas</body>')"
        });
      }
    }
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxHQUFHO0FBQ1BDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBRSxVQUFBSixHQUFHLEVBQUk7RUFDdENDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRyxHQUFHLENBQUNMLEdBQUcsRUFBRSxVQUFBTSxnQkFBZ0IsRUFBSTtJQUNyQyxJQUFLLDBCQUEwQixDQUFDQyxJQUFJLENBQUNELGdCQUFnQixDQUFDRSxHQUFHLENBQUMsRUFBRTtNQUV4RDs7TUFFQTtNQUNBO01BQ0E7TUFDQTs7TUFHQTs7TUFFQSxJQUFNRixnQkFBZ0IsQ0FBQ0UsR0FBRyxDQUFDQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRztRQUN0RDtRQUNBUixNQUFNLENBQUNTLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDTixHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVVPLElBQUksRUFBRTtVQUM3Q1gsTUFBTSxDQUFDUyxPQUFPLENBQUNDLElBQUksQ0FBQ04sR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVUSxLQUFLLEVBQUU7WUFDakRaLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWSxhQUFhLENBQ3pCUixnQkFBZ0IsQ0FBQ1MsRUFBRSxFQUNuQjtjQUNBQyxJQUFJLEVBQUUsOFVBS2VKLElBQUksQ0FBQyxPQUFPLENBQUMsNkhBRVgsR0FBQ0MsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQU16QyxDQUFDLENBQUM7VUFDTixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDTjtNQUVBLElBQU1QLGdCQUFnQixDQUFDRSxHQUFHLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRztRQUMxQ1IsTUFBTSxDQUFDUyxPQUFPLENBQUNDLElBQUksQ0FBQ04sR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVTyxJQUFJLEVBQUU7VUFDbkQsSUFBTSxPQUFPQSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxFQUFHO1lBQzlDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QjtZQUNBakIsTUFBTSxDQUFDQyxJQUFJLENBQUNZLGFBQWEsQ0FDckJSLGdCQUFnQixDQUFDUyxFQUFFLEVBQ25CO2NBQ0FDLElBQUk7WUFXSixDQUFDLENBQUM7WUFDTjtZQUNBO1VBQ0osQ0FBQyxNQUFPO1lBQ0pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDO1lBQ0FqQixNQUFNLENBQUNDLElBQUksQ0FBQ2lCLE1BQU0sQ0FBQztjQUFDWCxHQUFHLEVBQUVQLE1BQU0sQ0FBQ21CLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWE7WUFBQyxDQUFDLENBQUM7WUFDakU7VUFDSjtRQUNKLENBQUMsQ0FBQztNQUNOOztNQUNBLElBQU0sUUFBUSxDQUFDZCxJQUFJLENBQUNELGdCQUFnQixDQUFDRSxHQUFHLENBQUMsRUFBRztRQUN4QztRQUNBO1FBQ0FQLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDQyxJQUFJLENBQUNXLEdBQUcsQ0FBQztVQUFFQyxXQUFXLEVBQUVDO1FBQUksQ0FBQyxDQUFDO1FBQzdDdkIsTUFBTSxDQUFDQyxJQUFJLENBQUNZLGFBQWEsQ0FBRVIsZ0JBQWdCLENBQUNTLEVBQUUsRUFBRTtVQUFDQyxJQUFJO1FBQThFLENBQUMsQ0FBQztNQUN6STtJQUNKO0VBTUosQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0b19kcy8uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vYWwgaW5zdGFsYXJcclxuLy9jb25zb2xlLmxvZyhcImZyb20gYmFja2dyb3VuZFwiKVxyXG4vL2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQobnVsbCwge2ZpbGU6IFwiLi9mb3JlZ3JvdW5kLmpzXCJ9LCBudWxsKVxyXG5cclxudmFyIHRhYlxyXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoIHRhYiA9PiB7XHJcbiAgICBjaHJvbWUudGFicy5nZXQodGFiLCBjdXJyZW50X3RhYl9pbmZvID0+IHtcclxuICAgICAgICBpZiAoIC9eaHR0cHM6XFwvXFwvd2ViY1xcLnVhaVxcLmNsLy50ZXN0KGN1cnJlbnRfdGFiX2luZm8udXJsKSApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jaHJvbWUudGFicy5pbnNlcnRDU1MoY3VycmVudF90YWJfaW5mby5pZCwge2ZpbGU6IFwiLi9jb21wb25lbnRzL2xvYWRpbmdzY3JlZW4uY3NzXCJ9KTtcclxuXHJcbiAgICAgICAgICAgIC8vLy8vLy9jaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KGN1cnJlbnRfdGFiX2luZm8uaWQsIHtmaWxlOiBcIi4vZm9yZWdyb3VuZC5qc1wifSwgKCkgPT4gY29uc29sZS5sb2coY3VycmVudF90YWJfaW5mby51cmwpKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRfdGFiX2luZm8udXJsKVxyXG4gICAgICAgICAgICAvL2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQobnVsbCwge2ZpbGU6IFwiLi9mb3JlaWduLmpzXCJ9LCAoKSA9PiBjb25zb2xlLmxvZyhjdXJyZW50X3RhYl9pbmZvLnVybCkpXHJcbiAgICAgICAgICAgIC8vbG9naW4vaW5kZXgucGhwXHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy9jaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnZW1haWwnLCBmdW5jdGlvbiAoZGF0YSkge2NvbnNvbGUubG9nKGRhdGEpfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIChjdXJyZW50X3RhYl9pbmZvLnVybC5lbmRzV2l0aCgnL2xvZ2luL2luZGV4LnBocCcpKSApe1xyXG4gICAgICAgICAgICAgICAgLy9jaHJvbWUudGFicy5pbnNlcnRDU1MoY3VycmVudF90YWJfaW5mby5pZCwge2ZpbGU6IFwiLi9sb2FkaW5nc2NyZWVuLmNzc1wifSk7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnZW1haWwnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdwYXNzd29yZCcsIGZ1bmN0aW9uIChkYXRhMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RhYl9pbmZvLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luYnRuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbC52YWx1ZSA9ICdgK2RhdGFbJ2VtYWlsJ10rYCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZC52YWx1ZSA9ICdgK2RhdGEyWydwYXNzd29yZCddK2AnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gbGlzdG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCAoY3VycmVudF90YWJfaW5mby51cmwuZW5kc1dpdGgoJy5jbC8nKSkgKXtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdsaXN0YUN1cnNvcycsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAodHlwZW9mIGRhdGFbJ2xpc3RhQ3Vyc29zJ10gPT0gJ3VuZGVmaW5lZCcpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdidXNjYW5kbyBjdXJzb3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Nocm9tZS50YWJzLnVwZGF0ZSh7dXJsOiBcImh0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL2luZGV4LnBocD9teWNvdXJzZXM9MVwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RhYl9pbmZvLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSAnJywgYiA9ICcnLCBjID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291cnNlbmFtZScpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhPVN0cmluZyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3Vyc2VuYW1lJylbaV0uY2hpbGRyZW5bMF0uaHJlZi5zbGljZSgtNCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYj0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291cnNlbmFtZScpW2ldLmNoaWxkcmVuWzBdLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gW2EsIGIsIGNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBsaXN0YUN1cnNvczogb2JqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBwZXJzb25Gcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5YSB0ZW5lbW9zIGxvcyBjdXJzb3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWRpcmlnZSBhbCBtZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZSh7dXJsOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcIi4vaG9tZS5odG1sXCIpfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5yZXBsYWNlV2l0aCgnPGJvZHk+YXNkYXM8L2JvZHk+JylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoICgvY291cnNlLy50ZXN0KGN1cnJlbnRfdGFiX2luZm8udXJsKSkgKXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY3VycmVudF90YWJfaW5mby51cmwuc2xpY2UoLTQpKVxyXG4gICAgICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3BpY3MnKVswXVxyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBsaXN0YUN1cnNvczogb2JqIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCggY3VycmVudF90YWJfaW5mby5pZCwge2NvZGU6IGBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnJlcGxhY2VXaXRoKCc8Ym9keT5hc2RhczwvYm9keT4nKWB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsidGFiIiwiY2hyb21lIiwidGFicyIsIm9uVXBkYXRlZCIsImFkZExpc3RlbmVyIiwiZ2V0IiwiY3VycmVudF90YWJfaW5mbyIsInRlc3QiLCJ1cmwiLCJlbmRzV2l0aCIsInN0b3JhZ2UiLCJzeW5jIiwiZGF0YSIsImRhdGEyIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJleHRlbnNpb24iLCJnZXRVUkwiLCJzZXQiLCJsaXN0YUN1cnNvcyIsIm9iaiJdLCJzb3VyY2VSb290IjoiIn0=