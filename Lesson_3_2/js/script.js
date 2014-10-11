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