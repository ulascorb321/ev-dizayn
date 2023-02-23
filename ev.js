window.onscroll = function() {
    scrollFunction()
    };
    function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
    document.getElementById("onlyJSyc").style.display = "block"
    else
    document.getElementById("onlyJSyc").style.display = "none"
    }
    function topFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.body.scrollTop -= 40
    document.documentElement.scrollTop -= 40
    setTimeout(function() {
    topFunction()
    }, 0)
    } else {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    
    }
    }
let hizmetlerimiz = document.getElementById('navbarlink2');
let nedenbiz = document.getElementById('navbarlink3');
let enbegenilenler = document.getElementById('navbarlink4');
let musteriyorumlari = document.getElementById('navbarlink5');





    