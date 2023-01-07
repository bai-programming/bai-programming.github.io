function saveStorage(id) {
	var data = document.getElementById(id).value; //取值
	var time = new Date().getTime();
	localStorage.setItem(time, data); //保存
	alert("数据已经保存！");
	localStorage('msg');
}
function loadStorage(id) {
	var result = '<table border = "1">';
	for (var i = 0; i < localStorage.length; i++)
	{
		var key = localStorage.key(i);
		var value = localStorage.getItem(key); //读取
		var date = new Date();
		date.setTime(key);
		var datestr = date.toGMTString(); //格林威治时间
		result += '<tr><td>' + '这是第'+ i + '条数据 </td><td>' + value + '</td><td>' + datestr + '</td></tr>';
	}
	result += '</table>';
	var target = document.getElementById(id);
	target.innerHTML = result; 
}
function clearStorage(id) {
	localStorage.clear();
	alert("数据已经被成功删除了！");
	loadStorage('msg');
}