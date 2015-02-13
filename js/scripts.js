var triangleSolver = function(side1, side2, side3) {
	var equilateral = "equilateral";
	var isoceles = "isoceles";
	var scalene = "scalene";

	if((side1 === side2) && (side2 === side3)) {
		return equilateral;
	} else if((side1 === side2) || (side2 === side3) || (side1 === side3)) {
		return isoceles;
	} else if((side1 !== side2) && (side2 !== side3) && (side3 !== side1)) {
		return scalene;
	};
};
