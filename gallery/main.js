// NAVBAR DROPDOWN

    $(document).ready(function () {
        $('.dropdown').hover(function () {
            $(this).addClass('show');
            $(this).find('.dropdown-menu').addClass('show');
        }, function () {
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
        });
    });
// FOR MODAL

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");

        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})