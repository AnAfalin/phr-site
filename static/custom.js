$(document).ready(function() {

    // Попап
    $("#customers .item").click(function(event) {
        event.preventDefault();
        let descrText = $(this).find(".descr").html();
        let pp = $(this).data('pp');
        $(".overlay .inner > *").hide();
        $(".overlay ."+pp).text(descrText);
        $(".overlay, .overlay ."+pp).fadeIn(150);
    });
    $(".overlay").click(function(event) {
        if(!$(".popup").is(event.target) && $(".popup").has(event.target).length === 0 || event.target.className == "close") $(".overlay").fadeOut(150);
    });

    // Маска телефона
    $("input[name='PHONE']").mask("+7(999) 999-99-99").on('click', function (e) {
        var caret = e.target.selectionStart;
        var text = $(this).val();
        var lastChar = text.indexOf('_');
        if (lastChar < caret && lastChar !== -1) {
            $(this).caret(lastChar);
        }
    }).on('keydown', function (e) {
        if (e.keyCode === 39 || e.keyCode === 37) {
            var caret = e.target.selectionStart;
            var text = $(this).val();
            var lastChar = text.indexOf('_');
            if (lastChar <= caret && lastChar !== -1) {
                $(this).caret(lastChar - 1);
            }
        }
    });


});