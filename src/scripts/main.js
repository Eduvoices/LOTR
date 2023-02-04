document.addEventListener('DOMContentLoaded', function() {
    const faq = document.querySelectorAll('[data-faq-question]');

    for (let i=0; i < faq.length; i++) {
        faq[i].addEventListener('click', abreFecha)
    }

    function abreFecha(elemento){
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;
    
        elementoPai.classList.toggle(classe)
    }
})