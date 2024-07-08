// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// function getName() {
//     let name = prompt("Enter your name")
//     return(`${name} is active now`);
// }
// getName()

// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın

// let numbers = function (a,b,c) {
//     if(a>b && a>c){
//         return(a);
//     }
//     else if(b>a && b>c){
//         return(b);
//     }
//     else if(c>a && c>b){
//         return(c);
//     }
// }
// numbers(9,7,2)
// numbers(91,54,245)
// numbers(1,99,100)

// Task-03
// Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

// function getAmount() {
//   let rubl = 45;
//   let usd = 4;
//   let overall = usd * 75 + rubl;
//   return(`Bütün depozitlər üzrə məbləğ: ${overall} rubl.`);
// }
// getAmount()

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// Task-04
// Klaviaturadan 1-dən 99-da daxil olmaqla daxil edilmiş ədədi mətnlə ​​yazan funksiya tərtib edin.
// İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və
// onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.
// Birdən ona qədər rəqəmin daxil edilməsi zamanı boşluqsuz bir söz göstərilir.(bir ,iki, üç və.s)
// Hər hansı digər iki rəqəmli rəqəmi daxil edilməsi zamanı, boşluqla ayrılmış iki söz göstərilir,
// məsələn, "iyirmi bir".

// let val = prompt("", "7");

// function numberToText(val) {
//   if (val.length === 1) {
//     console.log(oneDigits(val));
//   } else if (val.length === 2 && val[1] === "0") {
//     console.log(tenDigits(val));
//   } else if (val.length === 2 && val[1] !== "0")
//     console.log(`${tenDigits(val)} ${oneDigits(val)}`);
// }
// numberToText(val);

// function tenDigits(param) {
//   switch (param[0]) {
//     case "1":
//       return "On";
//     case "2":
//       return "Iyirmi";
//     case "3":
//       return "Otuz";
//     case "4":
//       return "Qirx";
//     case "5":
//       return "Elli";
//     case "6":
//       return "Altmis";
//     case "7":
//       return "Yetmis";
//     case "8":
//       return "Seksen";
//     case "9":
//       return "Doxsan";
//   }
// }

// function oneDigits(param) {
//   switch (param[1]) {
//     case "1":
//       return "Bir";
//     case "2":
//       return "Iki";
//     case "3":
//       return "Uc";
//     case "4":
//       return "Dord";
//     case "5":
//       return "Bes";
//     case "6":
//       return "Alti";
//     case "7":
//       return "Yeddi";
//     case "8":
//       return "Sekkiz";
//     case "9":
//       return "Doqquz";
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task-05
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.

// function min(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else if (num2 > num1) {
//     return num2;
//   } else {
//     return "Ededler beraberdir";
//   }
// }

// return(min(8, 8));

// Task-06
// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

// function calc(num1, num2, point) {
//   if (point === "+") {
//     return num1 + num2;
//   } else if (point === "-") {
//     return num1 - num2;
//   } else if (point === "*") {
//     return num1 * num2;
//   } else if (point === "/") {
//     return num1 / num2;
//   } else {
//     return "Error";
//   }
// }
// return(calc(50, 10, "+"));

// Task-07
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq

// function isLucky() {
//   let num = 135615;
//   let str = num.toString();
//   let firstPart = Number(str[0]) + Number(str[1]) + Number(str[2]);
//   let secondPart = Number(str[3]) + Number(str[4]) + Number(str[5]);
//   if (firstPart === secondPart) {
//     return true;
//   } else {
//     return false;
//   }
// }
// return(isLucky());

// ((((((((((((((((((Task-08
// capitalizeWords funksiyasını yazın.
// Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
// Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
// Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq.))))))))))))))))))

// function capitalizaWords(str) {
//   let arr = str.split(" ");
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     let str2 = arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
//     result += str2
//   }
//   return(result);
// }
// capitalizaWords("type anything bro");

// Task-09
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven () funksiyasını yazın.

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// return(isEven(10));

// Task-10
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +71234567890

// function isValidNumber(number) {
//   for (let i = 0; i < number.length; i++) {
//     if (number[0] !== "+" || number[1] !== "7" || number.length !== 12) {
//       return(false);
//       break;
//     } else if (number[0] === "+" && number[1] === "7" && number.length === 12) {
//       return(true);
//       break;
//     }
//   }
// }
// isValidNumber("+7875124732");

// Task-11
// Mətni parametr kimi qəbul edən və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın.
// "15263538479359486()-="';:!@#$%^&*()"
// REGEX()

// let val = prompt("", "hcdbf76bjfhf%^%^*ncvbhjcmm");

// let result = val.match(/[a-zA-Z]/g);
// console.log(result.join("").length);
