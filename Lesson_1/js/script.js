/**
 * Created by Kyza on 02.10.2014.
 */
function inputData() {
    var fio, sex, age, e_mail, message;

    do
    {
        fio = prompt("Введите ФИО: ");
        sex = prompt("Введите пол: ", "м/ж");
        age = prompt("Введите возраст: ");
        e_mail = prompt("Введите e-mail:", "e-mail@gmail.com");
    }
    while (!confirm("ФИО: " + fio +
        "\nПол: " + sex +
        "\nВозраст: " + age +
        "\ne-mail: " + e_mail +
        "\n\nВсе верно?"))
    alert("Спасибо за предоставленную информацию!");
}

