document.write("My name is Artem <br>I am 16 years old<br>I like going to the gym and tasty food");
let number, summ = 0;
        do {
            number = parseInt(prompt("Введите число:", 10));
            summ += number;
        }
        while (confirm("Продолжим?"));
        alert("Сумма чисел: " + summ);