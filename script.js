$(document).ready(function() {
	createButton();
	createGrid(16);
});

function createButton() {
	$("body").prepend("<div id='top'><button name='chooseGridSize'>Choose Grid Size</button></div>");
	$("button").css("width", "125px");
	$("button").css("height", "30px");
	$("#top").css("text-align", "center");
	
	$("button").click(function() {
		$("#master").empty();
		var userGrid = prompt("How big's the grid?");
		createGrid(userGrid);
	});
};

function createGrid(gridSize) {
	$("#master").append("<table></table>");
	
	for (var i = 0; i < gridSize; i++) {
		$("table").append("<tr id='row" + i + "'></tr>");
		for (var x = 0; x < gridSize; x++) {
			$("#row" + i).append("<td class='column'></td>");
		};
	};
	
	hoverEffect();
};

function hoverEffect() {
	$(".column").hover(function() {
		$(this).css("background-color", "#71d9ff");
	});
};









