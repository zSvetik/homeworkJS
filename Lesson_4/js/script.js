function site() {
	var arrSite = new Array();
	arrSite = ['1.html', '2.html', '3.html', '4.html', '5.html', '6.html', '7.html', '8.html', '9.html', '10.html', ];
	location.replace(arrSite[Math.floor(Math.random() * 10)]);
}