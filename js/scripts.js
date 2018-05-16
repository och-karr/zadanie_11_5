function Button(text) {
	this.text = text || 'Hello'; //ustawiamy poczatkowa wartosc dla text w nowych obiektach, wlasciwosc dostaje domyslna wartosc Hello
}

// prototyp - obsluguje przycisk na stronie:
Button.prototype = {
	//metoda create tworzy przycisk na stronie:
	create: function() {
		var self = this;
	this.$element = $('<button>');  //Konstrukcja -this.$element- ma za zadanie trzymać w właściwości -element- >
									//< przycisk (element DOM), który stworzyliśmy za pomocą jQuery.
	this.$element.text(this.text);  // ustawiamy tekst na przycisku za pomoca jQuery
	// ta metoda po kliknieciu w przycisk wyswietla tekst na ekranie:
	this.$element.click(function() {
		alert(self.text);
	});
	$('body').append(this.$element); //bierzemy body i przypinamy do niego element
	// this.$element.appendTo($('body')); --> ten sam efekt: pobieramy element i przypinamy go do body
	}
}

var btn1 = new Button('Hello!'); //tworzenie pierwszej instancji klasy
btn1.create(); // wywolanie metody create w celu stworzenia elementu

