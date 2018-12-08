function mySearch(item) {
    if ($(item).siblings('.pole-js').val() == ""){
        $(item).siblings('.pole-js').addClass("error");
        return false;
    }
}
$(".pole-js").on("input", function () {
    $(this).removeClass("error");
});
