describe("triangleSolver", function() {
	it("returns equilateral for a triangle with three equal sides", function() {
		expect(triangleSolver(3, 3, 3)).to.equal("equilateral");
	});

	it("returns isoceles for a triangle with two equal sides", function() {
		expect(triangleSolver(3, 3, 4)).to.equal("isoceles");
	});

	it("returns scalene for a triangle with no equal sides", function() {
		expect(triangleSolver(2, 3, 4)).to.equal("scalene");
	});
});
