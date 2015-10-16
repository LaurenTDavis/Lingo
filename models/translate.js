
var translator = function(translateData) {
	this.word = translateData.word;
	this.ogLang = translateData.ogLang;
	this.newLang = translateData.newLang;
}

module.exports = {
	
	translator : translator
}