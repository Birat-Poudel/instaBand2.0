//FAQ Section
const faqs = document.querySelectorAll('.faq__body');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle("activefaq");
    })
})