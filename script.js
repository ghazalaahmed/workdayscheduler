$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $(".saveBtn").on("click", function () {
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);

    });
    $("#9  .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1  .description").val(localStorage.getItem("1"));
    $("#2  .description").val(localStorage.getItem("2"));
    $("#3  .description").val(localStorage.getItem("3"));
    $("#4  .description").val(localStorage.getItem("4"));
    $("#5  .description").val(localStorage.getItem("5"));

    // add more time
    function timeChange() {
        var currentHour = moment().hour(); // Number

        $('.time-block').each(function () {
            var idTime = parseInt($(this).attr("id"));
            if (idTime < currentHour) {
                $(this).addClass("past");
            } else if (idTime === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }
    timeChange();
    var timeInterval = setInterval(timeChange, 1000);


});