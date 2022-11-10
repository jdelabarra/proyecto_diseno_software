//al instalar
//console.log("from background")
//chrome.tabs.executeScript(null, {file: "./foreground.js"}, null)

var tab
chrome.tabs.onUpdated.addListener( tab => {
    chrome.tabs.get(tab, current_tab_info => {
        if ( /^https:\/\/webc\.uai\.cl/.test(current_tab_info.url) ){
            chrome.tabs.insertCSS(current_tab_info.id, {file: "./components/loadingscreen.css"});

            ///////chrome.tabs.executeScript(current_tab_info.id, {file: "./foreground.js"}, () => console.log(current_tab_info.url))
            //console.log(current_tab_info.url)
            //chrome.tabs.executeScript(null, {file: "./foreign.js"}, () => console.log(current_tab_info.url))
            //login/index.php
               
            //1
            if ( current_tab_info.status == 'complete' ){

                if (  (current_tab_info.url).endsWith('/login/index.php') ){
                    chrome.storage.sync.get('email', function (data) {
                        chrome.storage.sync.get('password', function (data2) {
                            chrome.tabs.executeScript(
                            current_tab_info.id,
                            {
                            code: `
                            // console.log('Login!');
                            setTimeout(function() {
                                var email = document.getElementById('username');
                                var password = document.getElementById('password');
                                var btn = document.getElementById('loginbtn');
                                email.value = '`+data+`';
                                email.dispatchEvent(new Event('input'));
                                password.value = '`+data2+`';
                                password.dispatchEvent(new Event('input'));
                                btn.click();
                            }, 5);
                            `
                            }); 
                        });
                    });
                }
            }
            var dictcursos = {'DISEÑO DE SOFTWARE Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4529', 'FUNDAMENTOS DE REDES DE COMPUTADORES Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4288', 'INTELIGENCIA ARTIFICIAL Sec.1 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4527', 'TALLER DE INNOVACIÓN Y EMPRENDIMIENTO TECNOLÓGICO Sec.10 STGO S-SEM. 2022/2': 'https://webc.uai.cl/course/view.php?id=4136' }
            //2
            if ( current_tab_info.status == 'complete'){
                if (  (current_tab_info.url).endsWith('/index.php?mycourses=1') ){
                    dictcursos
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
