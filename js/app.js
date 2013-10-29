var rules = [
	function(text) {return text.replace(/c(?!h)/g,'ch')}, //turns c to ch when c isn't followed by h
	function(text) {return text.replace(/ch/g,'c')}, //turns ch into c
	function(text) {return text.replace(/l/g,'r')}, //turns l into r
	function(text) {return text.replace(/r/g,'l')}, //turns r into l
	function(text) {return text.replace(/p(?!h)/g,'ph')}, //turns p into ph (when not already followed by h)
	function(text) {return text.replace(/ph/g,'p')}, //turns ph into p
	function(text) {return text.replace(/t(?!h)/g,'th')}, //turns p into ph (when not already followed by h)
	function(text) {return text.replace(/th/g,'t')}, //turns ph into p
	function(text) {return text.replace(/k(?!h)/g,'kh')}, //turns p into ph (when not already followed by h)
	function(text) {return text.replace(/kh/g,'k')} //turns ph into p
];





function go() {
	var startText = $('#word').val();
	var root = new node(startText,copyArray(rules));
	iterateRules(root,copyArray(rules));
	$('#result').html(getUniqueResults(root).toString().replace(/,/g,', ')	);
	$('#word').val('') ;
}



//assign function go to button
$('#createPermutations').on('click', go);