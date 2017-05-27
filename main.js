$(document).ready(function() {
	var gridSize = 16;
	createTiles(gridSize);
	
	$('.tile').hover(function(){
		$(this).css('background-color', 'white');
	});

	$('#size').click(function() {
		var gridSize = prompt('Number of tiles per side? (1-64)');
		$('.tile').remove();
		createTiles(gridSize);
		var divSize = 960/gridSize;
		$('.tile').css({'height': divSize+'px', 'width': divSize+'px'});

		$('.tile').hover(function(){
			$(this).css('background-color', 'white');
		});
	})		


	$('#reset').click(function() {
		$('.tile').css('background-color', 'black');
	})
});

function createTiles(gridSize) {
	for (var i = 1; i <= gridSize; i++) {
		for (var j = 1; j <= gridSize; j++) {
			$('.wrapper').append("<div class='tile'></div>");
		};
	};
};