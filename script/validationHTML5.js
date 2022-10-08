"use strict";
(function () {
    let formElem = document.getElementById('formElem');
    function onFormSubmit (evt) {
        evt.preventDefault();
        fetch("https://httpbin.org/post", {
                method: 'POST',
                body: new FormData(formElem)
            })
            .then(response => response.json())
            .then(form => {
                console.log(form.form);
            })
            .catch(error => console.log(error));
    }
    formElem.addEventListener('submit', onFormSubmit);
})();