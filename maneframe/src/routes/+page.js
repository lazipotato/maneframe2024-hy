// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

