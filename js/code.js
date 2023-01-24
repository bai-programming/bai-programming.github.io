var editor = document.getElementById("editor");
var display = document.getElementById("display");
editor.contentDocument.designMode = "on";

var writeInIframe = function(iframe, content)
{
	var doc = iframe.contentDocument;
	doc.open();
	doc.write(content);
	doc.close();
}
writeInIframe(editor, "&lt;!--Code Here--&gt;");
writeInIframe(display, "View Result Here");
document.getElementById("button").onclick = function(){
	var content = editor.contentDocument.documentElement.outerHTML;
	var replacedWord = {
		"&lt;": "<",
		"&gt;": ">",
		"&nbsp;": " ",
		
	};

	for (var originalWord in replacedWord) {
		content = content.replace(new RegExp(originalWord, "g"), replacedWord[originalWord])
	};
	if (content.search(/<[\s]*?script[\s]+src[\s]*?=[\s\S]*?>/i)+1){
		console.log(1)
		content = "&lt;script&gt; tag is not supported now!"
	};

	if (content.search(/<[\s]*?link[\s\S]+\/[\s]*?>/i)+1){
		content = "&lt;link&gt; tag is not supported now!"
	};

	content = content + "<style>all:upset</style>"
	writeInIframe(display, content);
}
