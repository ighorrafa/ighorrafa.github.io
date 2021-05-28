function changeColor(color) {
    $('body').attr('data-color', color);
};

$('.colors li').on("click", function() {
    className = $(this).attr('class');
    changeColor(className);
});