
var translator = function(translateData) {
	this.word = translateData.word;
	this.ogLang = translateData.ogLang;
	this.newLang = translateData.newLang;
	this.newWord = translateData.newWord;

}

module.exports = {
	
	translator : translator
}