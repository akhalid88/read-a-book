$(function () {
	// Client side change list functionality
	$(".change-read").on("click", function (event) {
		var id = $(this).data("id");
		var newRead = $(this).data("newread");

		var newReadState = {
			devoured: newRead
		};

		// Ajax call to controller routes
		$.ajax("/api/books/" + id, {
			type: "PUT",
			data: newReadState
		}).then(function () {
			console.log("changed devour to", newRead);
			location.reload();
		});
	});

	// Client side add book functionality
	$(".create-form").on("submit", function (event) {
		event.preventDefault();

		var newBook = {
			book_name: $("#bo").val().trim(),
			devoured: $("[name=devoured]:checked").val().trim()
		};

		// Ajax call to controller routes
		$.ajax("/api/books", {
			type: "POST",
			data: newBook
		}).then(function () {
			console.log("created new book");
			location.reload();
		});
	});
});