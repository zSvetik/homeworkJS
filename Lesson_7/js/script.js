/**
 * Created by Kyza on 02.10.2014.
 */
function checkFIO(txt) {
    var r = /^[А-Я][а-я]{1,} ([А-Я]\.?){2}$/; // создаем рег.выражение, определяющие ФИО

    if (r.test(txt))
        alert ("ФИО коректное")
    else
        alert ("Некорректные данные!")
}

function checkMail(txt) {
    var r = /^[A-Za-z]\w{2,9}@([a-z]+\.)+[a-z]{2,3}$/; // создаем рег.выражение, определяющие e-mail login@host

    if (r.test(txt))
        alert ("e-mail коректный")
    else
        alert ("Некорректные данные!")
}

