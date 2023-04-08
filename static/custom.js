$(document).ready(function() {

    // Попап
    $(".cpp").click(function(event) {
        event.preventDefault();
        let descrText = $(this).closest(".item").find(".descr").text();
        let pp = $(this).data('pp');
        $(".overlay .inner > *").hide();
        $(".overlay ."+pp).text(descrText);
        $(".overlay, .overlay ."+pp).fadeIn(150);
    });
    $(".overlay").click(function(event) {
        if(!$(".popup").is(event.target) && $(".popup").has(event.target).length === 0 || event.target.className == "close") $(".overlay").fadeOut(150);
    });

});