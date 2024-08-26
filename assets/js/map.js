document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.91910327096!2d-98.57043944432816!3d17.54946882989932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c92161894a3dfb%3A0x590c92204f07ee9d!2sC.%20Miguel%20Hidalgo%2036%2C%20San%20Diego%2C%2041300%20Tlapa%20de%20Comonfort%2C%20Gro.!5e0!3m2!1ses-419!2smx!4v1724357679576!5m2!1ses-419!2smx"></iframe>
        `;
    }, 500);

})