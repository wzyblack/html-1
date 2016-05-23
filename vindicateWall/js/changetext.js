var card = document.getElementById('card');
var activity = document.getElementById('act');

var card_triangle = document.getElementById('card_triangle');
var activity_triangle = document.getElementById('activity_triangle');

function showca(){
	activity.style.display = 'none';
	card.style.display = 'block';

	card_triangle.style.display = 'block';
	activity_triangle.style.display = 'none';

	ca.style.fontWeight = 'bold';
	ca.style.fontSize = '16px';
	ca.style.color = 'rgb(250,213,202)';
	aa.style.fontWeight = 'normal';
	aa.style.fontSize = '14px'
	aa.style.color = '#ccc';
	
}

function showaa(){
	card.style.display = 'none';
	activity.style.display = 'block';

	card_triangle.style.display = 'none';
	activity_triangle.style.display = 'block';

	ca.style.fontWeight = 'normal';
	ca.style.fontSize = '14px';
	ca.style.color = '#ccc';
	aa.style.fontWeight = 'bold';
	aa.style.fontSize = '16px';
	aa.style.color = 'rgb(250,213,202)';
}