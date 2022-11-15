//al instalar
//console.log("from background")
//chrome.tabs.executeScript(null, {file: "./foreground.js"}, null)

var tab
chrome.tabs.onUpdated.addListener( tab => {
    chrome.tabs.get(tab, current_tab_info => {
        if ( /^https:\/\/webc\.uai\.cl/.test(current_tab_info.url) ){
            
            //chrome.tabs.insertCSS(current_tab_info.id, {file: "./components/loadingscreen.css"});

            ///////chrome.tabs.executeScript(current_tab_info.id, {file: "./foreground.js"}, () => console.log(current_tab_info.url))
            //console.log(current_tab_info.url)
            //chrome.tabs.executeScript(null, {file: "./foreign.js"}, () => console.log(current_tab_info.url))
            //login/index.php
               

            //chrome.storage.sync.get('email', function (data) {console.log(data)});
            
            if ( (current_tab_info.url.endsWith('/login/index.php')) ){
                //chrome.tabs.insertCSS(current_tab_info.id, {file: "./loadingscreen.css"});
                chrome.storage.sync.get('email', function (data) {
                    chrome.storage.sync.get('password', function (data2) {
                        chrome.tabs.executeScript(
                        current_tab_info.id,
                        {
                        code: `
                        setTimeout(function() {
                            var email = document.getElementById('username');
                            var password = document.getElementById('password');
                            var btn = document.getElementById('loginbtn');
                            email.value = '`+data['email']+`';
                            email.dispatchEvent(new Event('input'));
                            password.value = '`+data2['password']+`';
                            password.dispatchEvent(new Event('input'));
                            btn.click();
                            console.log('login listo');
                        }, 5);
                        `
                        });
                    });
                });
            }
            
            if ( (current_tab_info.url.endsWith('.cl/')) ){
                chrome.storage.sync.get('listaCursos', function (data) {
                    if ( (typeof data['listaCursos'] == 'undefined') ){
                        console.log('buscando cursos')
                        //chrome.tabs.update({url: "https://webc.uai.cl/course/index.php?mycourses=1"});
                        chrome.tabs.executeScript(
                            current_tab_info.id,
                            {
                            code: `
                            let a = '', b = '', c = false;
                            let obj = [];
                            for(var i = 0; i < document.getElementsByClassName('coursename').length; i++){
                                a=String(document.getElementsByClassName('coursename')[i].children[0].href.slice(-4))
                                b= document.getElementsByClassName('coursename')[i].children[0].text;
                                obj[i] = [a, b, c]
                            };
                            //console.log(obj);
                            chrome.storage.sync.set({ listaCursos: obj });
                            `
                            });
                        //localStorage.setItem('data', obj);
                        //var personFromStorage = localStorage.getItem(key);
                    } else  {
                        console.log('ya tenemos los cursos');
                        //redirige al menu
                        chrome.tabs.update({url: chrome.extension.getURL("./home.html")});
                    }
                });
            }
        }





    });
});
