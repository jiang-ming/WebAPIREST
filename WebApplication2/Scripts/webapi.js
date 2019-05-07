var api = "http://localhost:50106/api/categories/";

$(document).ready(function () {
    displayCategories();
    $(document.body).on('click', 'a', function (e) {
        e.preventDefault();
        findCategory($(this).attr("href"));
    });
});
function displayCategories() {
    $.getJSON(api, function (data) {
        var rows = "";
        $.each(data, function (key, val) {
            rows += "<tr><td><a href=" + api + val.CategoryID + ">"
                + val.CategoryID + "</a></td>";
            rows += "<td>" + val.ShortName + "</td>";
            rows += "<td>" + val.LongName + "</td></tr>";
        });
        $('#categories > tbody tr').remove();
        $('#categories > tbody').append(rows);
        clearAll();
    })
        .fail(showError);
};
function findCategory(href) {
    $('#message').html("Finding...");
    $.getJSON(href, function (data) {
        $('#id').val(data.CategoryID);
        $("#id").attr("disabled", "disabled");
        $('#short').val(data.ShortName);
        $('#long').val(data.LongName);
        $('#message').text("");
    })
        .fail(showError);
};
function insertCat() {
    $('#message').text("Inserting...");
    $.ajax({
        type: 'POST',
        url: api,
        data: $('#form1').serialize(),
        dataType: "json",
        success: displayCategories,
        error: showError
    });
};
function updateCat() {
    $('#message').text("Updating...");
    $.ajax({
        type: 'PUT',
        url: api + $('#id').val(),
        data: $('#form1').serialize(),
        dataType: "json",
        success: displayCategories,
        error: showError
    });
};
function deleteCat() {
    $('#message').text("Deleting...");
    $.ajax({
        type: 'DELETE',
        url: api + $('#id').val(),
        data: $('#form1').serialize(),
        dataType: "json",
        success: displayCategories,
        error: showError
    });
};

function showError(request, status, error) {
    try {
        var response = JSON.parse(request.responseText);
        $('#message').text(response.ExceptionMessage);
    } catch (e) {
        $('#message').text("An error occurred - unable to contact the server.");
    }
};
function clearAll() {
    $('#id').val("");
    $("#id").removeAttr("disabled");
    $('#short').val("");
    $('#long').val("");
    $('#message').text("");
};
