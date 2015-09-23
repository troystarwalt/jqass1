$("#wooo").on("click", function(event){
	$(".blue")
		.animate({
			left: "200px",
			opacity: 0.5,
			width: "50.5px",
			heigth: "250px",
			padding: "10px",
	})
	$(".green")
		.animate({
			left: "500px",
			opacity: 1.0,
			width: "50.5px",
			margin: "90px",
			borderWidth: "10px"
	})
	$("#box0")
		.hide("slow");

})