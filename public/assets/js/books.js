$(function () {

	$(".change-read").on("click", function (event) {
		var id = $(this).data("id");
		var newRead = $(this).data("newread");
		console.log(id);
		var newReadState = {
			devoured: newRead
		};

		$.ajax("/api/books/" + id, {
			type: "PUT",
			data: newReadState
		}).then(
			function () {
				console.log("changed devour to", newRead);

				location.reload();
			}
		);
	});

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