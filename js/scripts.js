var triangleSolver = function(side1, side2, side3) {
	var side1 = parseInt(side1);
	var side2 = parseInt(side2);
	var side3 = parseInt(side3);
	var equilateral = "equilateral";
	var isoceles = "isoceles";
	var scalene = "scalene";
	var error = "not a valid triangle";
	var sides = [side1, side2, side3];
	var invalidSide = false;

	sides.forEach(function(side) {
		if (isNaN(side)) {
			invalidSide = true;
		};
	});

	if((side1 + side2 <= side3) || (side2 + side3 <= side1) ||
		 (side1 + side3 <= side2) || (invalidSide === true)) {
		return error;
	} else {
		if((side1 === side2) && (side2 === side3)) {
			return equilateral;
		} else if((side1 === side2) || (side2 === side3) || (side1 === side3)) {
			return isoceles;
		} else if((side1 !== side2) && (side2 !== side3) && (side3 !== side1)) {
			return scalene;
		} else {
			return error;
		};
	};
};

// ----------------------------------------------------------------------------

$(document).ready(function() {

	$("form#triangle").submit(function(event) {
		$("#side-one").text("");
		$("#side-two").text("");
		$("#side-three").text("");
		$("#triangle-result").text("");
		$("#result").hide();

		var side1 = $("input#side1").val();
		var side2 = $("input#side2").val();
		var side3 = $("input#side3").val();

		var sides = [side1, side2, side3]

		var triangleType = triangleSolver(side1, side2, side3);

		$("#side-one").text(side1);
		$("#side-two").text(side2);
		$("#side-three").text(side3);
		$("#triangle-result").text(triangleType);

		$("#result").show();

		event.preventDefault();
	});
});
