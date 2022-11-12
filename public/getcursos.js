

function openTab(url) { 
    var a = document.createElement('a'); 
    a.href = url; 
    a.target='_blank'; 
    a.click(); 
}

export function getCursos(user, pass) {

    chrome.browser.openTab({
        url: 'http://google.com'
      });

    window.open('http://google.com');
    
    openTab('https://webc.uai.cl/login/index.php');

    fetch('https://webc.uai.cl/login/index.php', {
        method: 'post',
        body: 'a=1'
      }).then(function(r) {
        return r;
      }).then(function(data) {
        console.log(data);
      });

    return 'got cursos'
}