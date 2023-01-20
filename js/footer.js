document.write("<div id='footer'>");
var c = "Copyright© 2023 by bai-programming. All rights reserved.";
var setFooter = function(content)
{
	document.getElementById('footer').textContent = content;
};

setFooter(c);
tagsWithPrompts = document.querySelectorAll('[data-prompt]');
for (var i = tagsWithPrompts.length - 1; i >= 0; i--) {
	t = tagsWithPrompts[i];
	eval("t.onmouseover = function(){setFooter('"+t.getAttribute('data-prompt')+"')};")
	t.onmouseout = function(){setFooter(c)};
};
