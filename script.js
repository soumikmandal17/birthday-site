function openSurprise() {

    // Small delay makes the transition feel smoother
    document.body.style.opacity = "0";

    setTimeout(function () {
        window.location.href = "birthday.html";
    }, 500);
}


function goBack() {

    document.body.style.opacity = "0";

    setTimeout(function () {
        window.location.href = "index.html";
    }, 400);
}


// Page fade-in
window.addEventListener("load", function () {

    document.body.style.opacity = "0";

    setTimeout(function () {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);


    function openPhoto() {
        window.open("birthday-photo.jpg", "_blank");
    }


    function openPhoto() {
        window.location.href = "photo.html";
    }

});