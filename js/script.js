(function(){

    var navSearchBtn,searchFormWrap,searchFormInput;

    init();

    function init(){
        searchFormWrap = document.getElementById ('search-form-wrap');
        navSearchBtn = document.getElementById ('nav-search-btn');
        searchFormInput = document.getElementById('search-form-input')

        navSearchBtn.addEventListener('click', toogleSearch);
    }

    function toogleSearch(){
        searchFormWrap.classList.toggle('on');

        if(searchFormWrap.classList.contains('on')){
            searchFormInput.focus();
        }
    }

})();
