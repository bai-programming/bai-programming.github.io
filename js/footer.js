$("body").append("<div id=\"footer\">")
var c = "Copyright© 2023 by bai-programming. All rights reserved.";
var setFooter = function(content){$('#footer')[0].textContent = content;}
setFooter(c);
tagsWithPrompts = $('[data-prompt]');
for (var i = tagsWithPrompts.length - 1; i >= 0; i--) {
	t = tagsWithPrompts[i];
	eval("t.onmouseover = function(){setFooter('"+t.getAttribute('data-prompt')+"')};")
	t.onmouseout = function(){setFooter(c)};
}
