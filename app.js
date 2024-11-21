$(document).ready(function () {
    $("#light-mode-btn").click(function () {
        $("body").removeClass("mode-dark").addClass("mode-light");
      
        $("table").removeClass("table-dark-custom");
    });
    $("#dark-mode-btn").click(function () {
        $("body").removeClass("mode-light").addClass("mode-dark");
        
        $("table").addClass("table-dark-custom");
    });
});