/**
 * Created by jeck on 28.01.17.
 */
$(function () {
    $("#create-form").on('submit', function (e) {
        console.log("dhdhdfhdf");
        $.ajax({
            method: "POST",
            url: "/createPlayers",
            data: $(this).serialize()
        })
            .fail(function (error) {
                // show error message
            })
            .success(function (data) {
                console.log(data);
                $(".task-table tbody").append("<tr><td>" + data.Name + "</td><td>" + data.PDate + "</td><td>" + data.Country + "</td><td>" + data.Club + "</td><td>" + data.Role + "</td></tr>");
            })
            .always(function () {
                $("#myModal").modal("hide");

            });
        e.preventDefault();
    })
});