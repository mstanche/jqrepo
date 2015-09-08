$('h4').text('This is a header set from the script!');
$('#img').click(function(){
	var imgsrc = $('#img')[0].getAttribute('src');
	if(imgsrc === 'img/icon.png') {
		$('#img')[0].setAttribute('src', 'img/click2chat.png');
	}else {
		$('#img')[0].setAttribute('src', 'img/icon.png');
	}
});
function setUserName(username) {
	var username = prompt('Please enter your name.');
	localStorage.setItem('name', username);
	$('h4').text('Hello ' + username);
}
$('#btn_name').click(function(){
	if(localStorage.getItem('name'))
	
	if(!(username === '') || (!username === null)) {
		setUserName(username);
	}else {
		alert('Please enter your name.');
	}
});
