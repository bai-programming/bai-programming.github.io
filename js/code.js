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
		"[\\s]+":" ",
		"&lt;": "<",
		"&gt;": ">",
		"&quot;": '"',
		"&nbsp;": " ",
		"&emsp;": "　",
		"&reg;": "®",
		"&copy;": "©",
		"&amp;": "&",
	};

	for (var originalWord in replacedWord) {
		content = content.replace(new RegExp(originalWord, "gi"), replacedWord[originalWord])
	};
	if (content.search(/<[\s]*?script[\s]+src[\s]*?=[\s\S]*?>/i)+1){
		content = "&lt;script&gt; tag is not supported now!"
	};

	if (content.search(/<[\s]*?link[\s\S]+\/[\s]*?>/i)+1){
		content = "&lt;link&gt; tag is not supported now!"
	};

	writeInIframe(display, content);
}
