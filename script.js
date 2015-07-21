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
		// var alpha = 0.4;
		if (document.getElementById("default").checked == true) {
			$(this).css("background-color", "#71d9ff");
		} else if (document.getElementById("colors").checked == true){
			$(this).css("background-color", randRGB());
		} else {
			// $(this).css("background-color", "#71d9ff");
			// $(this).css("opacity", alpha);
			// alpha += 0.05;
			var alpha = parseFloat($(this).css("opacity")) * 0.9;
			$(this).css("opacity", alpha);
		};
	});
};

function randRGB() {
	var rgbArr = [];
	
	for (var i = 0; i < 3; i++) {
		rgbArr.push(Math.floor(Math.random() * 255));
	};
	
	var color = "rgb(" + rgbArr[0] + ", " + rgbArr[1] + ", " + rgbArr[2] + ")";
	return color;
};







