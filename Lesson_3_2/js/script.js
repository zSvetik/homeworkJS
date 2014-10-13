/**
 * Created by Kyza on 02.10.2014.
 */
function format (n){
    return n<10 ? "0"+n : n;
}

function updateClock () {
    var arrDays = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");
    var d = new Date ();
    var dateStr = "Сегодня: "+format(arrDays[d.getDay()])+
        "   "+format(d.getDate())+
        "."+format(d.getMonth() + 1)+
        "."+format(d.getFullYear())+
        "   "+format(d.getHours())+":"+
        format(d.getMinutes())+":"+format(d.getSeconds());
    clock.innerText = dateStr;
}

var R = 80,               // радиус окружности 
            a = 0,                // угол (в радианах) 
            da = 3*Math.PI/180,   // приращение угла 
            delay = 30,           // задержка (в мсек.) 
            x = 100, y = 100;
        
        // функция движения элемента 
        function moveElem() {
            // изменение координат элемента 
            document.getElementById("elemToMove").style.left = x+R*Math.cos(a);
            document.getElementById("elemToMove").style.top  = y+R*Math.sin(a);    
            // увеличение расстояния до полюса 
            a+=da;
        }
        // периодический вызов функции движения 
        setInterval ("moveElem()", delay);

        document.onmousemove = function(e) {
            x = e.clientX;
            y = e.clientY;
        }