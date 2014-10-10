/**
 * Created by Kyza on 02.10.2014.
 */
function question() {
    var sum = 0;
    var result = new Array();
    var digit = new Array("Не правильно", "Правильно");
    var answerForQuestion = new Array(true, false, true, false, true);
    var question = new Array("1. 2 + 2 = 4?",
        "2. 12 * 12 = 12?",
        "3. Солнце горячее?",
        "4. Зимой жарко?",
        "5. Украина в Европе?");

    for (var i = 0; i < question.length; i++) {
        if (confirm(question[i]) == answerForQuestion[i]) {
            result[i] = digit[1];
            sum++;
        } else {
            result[i] = digit[0];
        }
    }

    var tmp = new Array();
    for (var i = 0; i < result.length; i++) {
        tmp[i] = question[i] + " - " + result[i];
    }
    alert("Ваш результат: " + sum + " из " + question.length + ".\n\n" + tmp.join("\n"));
//    document.write("Ваш результат: " + sum + " из " + question.length + ".<br /><br />" + tmp.join(<br />));
}

function validate(text) {
    var arr = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя .";
    for (var i = 0; i < text.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (text[i].toLowerCase() == arr[j]) {
                count++;
            }
        }
        if (count == 0) {
            document.write("Имя " + text + " не коректное.");
            return;
        }
    }
    document.write("Имя " + text + " прошло проверку.");
}

