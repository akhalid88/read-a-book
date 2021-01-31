$(function () {

	$(".create-form").on("submit", function (event) {
		event.preventDefault();

		var newBook = {
			book_name: $("#bo").val().trim(),
			devoured: $("[name=devoured]:checked").val().trim()
		};

		$.ajax("/api/books", {
			type: "POST",
			data: newBook
		}).then(
			function () {
				console.log("created new book");

				location.reload();
			}
		);
	});

});