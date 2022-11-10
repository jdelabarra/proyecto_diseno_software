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
      chrome.tabs.insertCSS(current_tab_info.id, {
        file: "./components/loadingscreen.css"
      });

      ///////chrome.tabs.executeScript(current_tab_info.id, {file: "./foreground.js"}, () => console.log(current_tab_info.url))
      //console.log(current_tab_info.url)
      //chrome.tabs.executeScript(null, {file: "./foreign.js"}, () => console.log(current_tab_info.url))
      //login/index.php

      //1
      if (current_tab_info.status == 'complete') {
        if (current_tab_info.url.endsWith('/login/index.php')) {
          chrome.storage.sync.get('email', function (data) {
            chrome.storage.sync.get('password', function (data2) {
              chrome.tabs.executeScript(current_tab_info.id, {
                code: "\n                            // console.log('Login!');\n                            setTimeout(function() {\n                                var email = document.getElementById('username');\n                                var password = document.getElementById('password');\n                                var btn = document.getElementById('loginbtn');\n                                email.value = '" + data + "';\n                                email.dispatchEvent(new Event('input'));\n                                password.value = '" + data2 + "';\n                                password.dispatchEvent(new Event('input'));\n                                btn.click();\n                            }, 5);\n                            "
              });
            });
          });
        }
      }
      var dictcursos = {
        'DISEÑO DE SOFTWARE Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4529',
        'FUNDAMENTOS DE REDES DE COMPUTADORES Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4288',
        'INTELIGENCIA ARTIFICIAL Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4527',
        'TALLER DE INNOVACIÓN Y EMPRENDIMIENTO TECNOLÓGICO Sec.10 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4136'
      };
      //2
      if (current_tab_info.status == 'complete') {
        if (current_tab_info.url.endsWith('/index.php?mycourses=1')) {
          dictcursos;
        }
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxHQUFHO0FBQ1BDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBRSxVQUFBSixHQUFHLEVBQUk7RUFDdENDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRyxHQUFHLENBQUNMLEdBQUcsRUFBRSxVQUFBTSxnQkFBZ0IsRUFBSTtJQUNyQyxJQUFLLDBCQUEwQixDQUFDQyxJQUFJLENBQUNELGdCQUFnQixDQUFDRSxHQUFHLENBQUMsRUFBRTtNQUN4RFAsTUFBTSxDQUFDQyxJQUFJLENBQUNPLFNBQVMsQ0FBQ0gsZ0JBQWdCLENBQUNJLEVBQUUsRUFBRTtRQUFDQyxJQUFJLEVBQUU7TUFBZ0MsQ0FBQyxDQUFDOztNQUVwRjtNQUNBO01BQ0E7TUFDQTs7TUFFQTtNQUNBLElBQUtMLGdCQUFnQixDQUFDTSxNQUFNLElBQUksVUFBVSxFQUFFO1FBRXhDLElBQU9OLGdCQUFnQixDQUFDRSxHQUFHLENBQUVLLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1VBQ3ZEWixNQUFNLENBQUNhLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDVixHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVVXLElBQUksRUFBRTtZQUM3Q2YsTUFBTSxDQUFDYSxPQUFPLENBQUNDLElBQUksQ0FBQ1YsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVWSxLQUFLLEVBQUU7Y0FDakRoQixNQUFNLENBQUNDLElBQUksQ0FBQ2dCLGFBQWEsQ0FDekJaLGdCQUFnQixDQUFDSSxFQUFFLEVBQ25CO2dCQUNBUyxJQUFJLEVBQUUseVpBTWVILElBQUkscUlBRUYsR0FBQ0MsS0FBSztjQUs3QixDQUFDLENBQUM7WUFDTixDQUFDLENBQUM7VUFDTixDQUFDLENBQUM7UUFDTjtNQUNKO01BQ0EsSUFBSUcsVUFBVSxHQUFHO1FBQUMsNkNBQTZDLEVBQUUsNkNBQTZDO1FBQUUsK0RBQStELEVBQUUsNkNBQTZDO1FBQUUsa0RBQWtELEVBQUUsNkNBQTZDO1FBQUUsNkVBQTZFLEVBQUU7TUFBOEMsQ0FBQztNQUNqYztNQUNBLElBQUtkLGdCQUFnQixDQUFDTSxNQUFNLElBQUksVUFBVSxFQUFDO1FBQ3ZDLElBQU9OLGdCQUFnQixDQUFDRSxHQUFHLENBQUVLLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1VBQzdETyxVQUFVO1FBQ2Q7TUFDSjs7TUFNWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFJWTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7TUFFQTtNQUNBO0lBRUo7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3llY3RvX2RzLy4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9hbCBpbnN0YWxhclxyXG4vL2NvbnNvbGUubG9nKFwiZnJvbSBiYWNrZ3JvdW5kXCIpXHJcbi8vY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChudWxsLCB7ZmlsZTogXCIuL2ZvcmVncm91bmQuanNcIn0sIG51bGwpXHJcblxyXG52YXIgdGFiXHJcbmNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lciggdGFiID0+IHtcclxuICAgIGNocm9tZS50YWJzLmdldCh0YWIsIGN1cnJlbnRfdGFiX2luZm8gPT4ge1xyXG4gICAgICAgIGlmICggL15odHRwczpcXC9cXC93ZWJjXFwudWFpXFwuY2wvLnRlc3QoY3VycmVudF90YWJfaW5mby51cmwpICl7XHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLmluc2VydENTUyhjdXJyZW50X3RhYl9pbmZvLmlkLCB7ZmlsZTogXCIuL2NvbXBvbmVudHMvbG9hZGluZ3NjcmVlbi5jc3NcIn0pO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vL2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoY3VycmVudF90YWJfaW5mby5pZCwge2ZpbGU6IFwiLi9mb3JlZ3JvdW5kLmpzXCJ9LCAoKSA9PiBjb25zb2xlLmxvZyhjdXJyZW50X3RhYl9pbmZvLnVybCkpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY3VycmVudF90YWJfaW5mby51cmwpXHJcbiAgICAgICAgICAgIC8vY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChudWxsLCB7ZmlsZTogXCIuL2ZvcmVpZ24uanNcIn0sICgpID0+IGNvbnNvbGUubG9nKGN1cnJlbnRfdGFiX2luZm8udXJsKSlcclxuICAgICAgICAgICAgLy9sb2dpbi9pbmRleC5waHBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vMVxyXG4gICAgICAgICAgICBpZiAoIGN1cnJlbnRfdGFiX2luZm8uc3RhdHVzID09ICdjb21wbGV0ZScgKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoICAoY3VycmVudF90YWJfaW5mby51cmwpLmVuZHNXaXRoKCcvbG9naW4vaW5kZXgucGhwJykgKXtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnZW1haWwnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgncGFzc3dvcmQnLCBmdW5jdGlvbiAoZGF0YTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RhYl9pbmZvLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0xvZ2luIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luYnRuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwudmFsdWUgPSAnYCtkYXRhK2AnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZC52YWx1ZSA9ICdgK2RhdGEyK2AnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGljdGN1cnNvcyA9IHsnRElTRcORTyBERSBTT0ZUV0FSRSBTZWMuMSBTVEdPIFMtU0VNLiAyMDIyLzInOiAnaHR0cHM6Ly93ZWJjLnVhaS5jbC9jb3Vyc2Uvdmlldy5waHA/aWQ9NDUyOScsICdGVU5EQU1FTlRPUyBERSBSRURFUyBERSBDT01QVVRBRE9SRVMgU2VjLjEgU1RHTyBTLVNFTS4gMjAyMi8yJzogJ2h0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL3ZpZXcucGhwP2lkPTQyODgnLCAnSU5URUxJR0VOQ0lBIEFSVElGSUNJQUwgU2VjLjEgU1RHTyBTLVNFTS4gMjAyMi8yJzogJ2h0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL3ZpZXcucGhwP2lkPTQ1MjcnLCAnVEFMTEVSIERFIElOTk9WQUNJw5NOIFkgRU1QUkVORElNSUVOVE8gVEVDTk9Mw5NHSUNPIFNlYy4xMCBTVEdPIFMtU0VNLiAyMDIyLzInOiAnaHR0cHM6Ly93ZWJjLnVhaS5jbC9jb3Vyc2Uvdmlldy5waHA/aWQ9NDEzNicgfVxyXG4gICAgICAgICAgICAvLzJcclxuICAgICAgICAgICAgaWYgKCBjdXJyZW50X3RhYl9pbmZvLnN0YXR1cyA9PSAnY29tcGxldGUnKXtcclxuICAgICAgICAgICAgICAgIGlmICggIChjdXJyZW50X3RhYl9pbmZvLnVybCkuZW5kc1dpdGgoJy9pbmRleC5waHA/bXljb3Vyc2VzPTEnKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpY3RjdXJzb3NcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbi8qIFxyXG4gICAgICAgICAgICAvLzNcclxuICAgICAgICAgICAgLy9jaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7bGlzdGFjdXJzb3M6bnVsbH0pXHJcbiAgICAgICAgICAgIC8vJiYgIWNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHtsaXN0YWN1cnNvc30pXHJcbiAgICAgICAgICAgIGlmICggY3VycmVudF90YWJfaW5mby5zdGF0dXMgPT0gJ2NvbXBsZXRlJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh7bGlzdGFjdXJzb3N9KVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZSh7dXJsOiBcImh0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL2luZGV4LnBocD9teWNvdXJzZXM9MVwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpY3RDdXJzb3MgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGljdEN1cnNvc1tpXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbC1sZy0xMicpW2ldLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe2xpc3RhY3Vyc29zOmRpY3RDdXJzb3N9KVxyXG4gICAgICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wtbGctMTInKVswXS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICAvL2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQobnVsbCwge2ZpbGU6IFwiLi9mb3JlaWduLmpzXCJ9LCAoKSA9PiBjb25zb2xlLmxvZyhjdXJyZW50X3RhYl9pbmZvLnVybCkpXHJcbiAgICAgICAgICAgICAgICAvL3snRElTRcORTyBERSBTT0ZUV0FSRSBTZWMuMSBTVEdPIFMtU0VNLiAyMDIyLzInOiAnaHR0cHM6Ly93ZWJjLnVhaS5jbC9jb3Vyc2Uvdmlldy5waHA/aWQ9NDUyOScsICdGVU5EQU1FTlRPUyBERSBSRURFUyBERSBDT01QVVRBRE9SRVMgU2VjLjEgU1RHTyBTLVNFTS4gMjAyMi8yJzogJ2h0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL3ZpZXcucGhwP2lkPTQyODgnLCAnSU5URUxJR0VOQ0lBIEFSVElGSUNJQUwgU2VjLjEgU1RHTyBTLVNFTS4gMjAyMi8yJzogJ2h0dHBzOi8vd2ViYy51YWkuY2wvY291cnNlL3ZpZXcucGhwP2lkPTQ1MjcnLCAnVEFMTEVSIERFIElOTk9WQUNJw5NOIFkgRU1QUkVORElNSUVOVE8gVEVDTk9Mw5NHSUNPIFNlYy4xMCBTVEdPIFMtU0VNLiAyMDIyLzInOiAnaHR0cHM6Ly93ZWJjLnVhaS5jbC9jb3Vyc2Uvdmlldy5waHA/aWQ9NDEzNicgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuKi9cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wtbGctMTInKVxyXG4gICAgICAgICAgICAvLy5nZXRUZXh0KClcclxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wtbGctMTInKVswXS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5ocmVmXHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sLWxnLTEyJylbMF0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuYXJpYUxhYmVsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sLWxnLTEyJylbMF0uZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5ocmVmXHJcbiAgICAgICAgICAgIC8vMC0xMVxyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbC1sZy0xMicpWzBdLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlLWxpbmsgYnRuJylbMl0uYXJpYUxhYmVsXHJcbiAgICAgICAgICAgIC8vTmV4dFxyXG5cclxuICAgICAgICAgICAgLy8uaW5jbHVkZXMoJ1NlYy4nKVxyXG4gICAgICAgICAgICAvL2FhLnNsaWNlKDAsIChhYS5zZWFyY2goJ1NlYy4nKSs1KSApXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbInRhYiIsImNocm9tZSIsInRhYnMiLCJvblVwZGF0ZWQiLCJhZGRMaXN0ZW5lciIsImdldCIsImN1cnJlbnRfdGFiX2luZm8iLCJ0ZXN0IiwidXJsIiwiaW5zZXJ0Q1NTIiwiaWQiLCJmaWxlIiwic3RhdHVzIiwiZW5kc1dpdGgiLCJzdG9yYWdlIiwic3luYyIsImRhdGEiLCJkYXRhMiIsImV4ZWN1dGVTY3JpcHQiLCJjb2RlIiwiZGljdGN1cnNvcyJdLCJzb3VyY2VSb290IjoiIn0=