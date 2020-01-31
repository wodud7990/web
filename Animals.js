function setColor3(color){
	$('body').css('backgroundColor', color);
}
function setColor2(color){
	$('body').css('color', color);
}
function setColor(color){
	$('body').css('color', color);
}
function Change(self) {
	var target = document.querySelector('body');
	if (self.value === 'Dark Mode') {
		setColor3('black');
		setColor2('white');
		self.value = 'White Mode';
		/*
		 * ここは画面の色が変わりによって自動的に CSSの設定が変わるようにすること
		 * document.querySelectorAll()これは対象とするのが複数の場合
		 */
		setColor('white');

	} else {
		setColor3('white');
		setColor2('black');
		self.value = 'Dark Mode';

		setColor('blue');
	}
}