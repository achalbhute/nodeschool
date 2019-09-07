function foo () {
	quux = 1;
	var bar;
	function zip () {
		var quux = 3;
		bar = true;
	}
	return zip;
}
