// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// function getName() {
//     let name = prompt("Enter your name")
//     console.log(`${name} is active now`);
// }
// getName()

// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın

// let numbers = function (a,b,c) {
//     if(a>b && a>c){
//         console.log(a);
//     }
//     else if(b>a && b>c){
//         console.log(b);
//     }
//     else if(c>a && c>b){
//         console.log(c);
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
//   console.log(`Bütün depozitlər üzrə məbləğ: ${overall} rubl.`);
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

// function numberToText(number) {
//     let num = number.toString();
//     let count = num.length;
//     let onluq = "";
//     let teklik = "";
//     if (+num[0] === 1) {
//       onluq = "On";
//     } else if (+num[0] === 2) {
//       onluq = "Iyirmi";
//     } else if (+num[0] === 3) {
//       onluq = "Otuz";
//     } else if (+num[0] === 4) {
//       onluq = "Qirx";
//     } else if (+num[0] === 5) {
//       onluq = "Elli";
//     } else if (+num[0] === 6) {
//       onluq = "Altmis";
//     } else if (+num[0] === 7) {
//       onluq = "Yetmis";
//     } else if (+num[0] === 8) {
//       onluq = "Seksen";
//     } else if (+num[0] === 9) {
//       onluq = "Doxsan";
//     } else if (+num[0] === 0) {
//       onluq = "";
//     }
//     if (+num[1] === 0) {
//       teklik = "";
//     } else if (+num[1] === 1) {
//       teklik = "bir";
//     } else if (+num[1] === 2) {
//       teklik = "iki";
//     } else if (+num[1] === 3) {
//       teklik = "uc";
//     } else if (+num[1] === 4) {
//       teklik = "dord";
//     } else if (+num[1] === 5) {
//       teklik = "bes";
//     } else if (+num[1] === 6) {
//       teklik = "alti";
//     } else if (+num[1] === 7) {
//       teklik = "yeddi";
//     } else if (+num[1] === 8) {
//       teklik = "sekkiz";
//     } else if (+num[1] === 9) {
//       teklik = "doqquz";
//     }
//     let result = ""
//     if (count === 1) {
//       teklik = onluq
//       result += onluq
//     }else if(count === 2){
//       result += onluq + " " + teklik
//     }else{
//       result += "Yanlis eded daxil edilib"
//     }
//     console.log(result);
//   }
//   numberToText(3);
  
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
  
  // console.log(min(8, 8));
  
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
  // console.log(calc(50, 10, "+"));
  
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
  // console.log(isLucky());
  
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
  //   console.log(result);
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
  // console.log(isEven(10));
  
  // Task-10
  // Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
  // Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
  // +71234567890
  
  // function isValidNumber(number) {
  //   for (let i = 0; i < number.length; i++) {
  //     if (number[0] !== "+" || number[1] !== "7" || number.length !== 12) {
  //       console.log(false);
  //       break;
  //     } else if (number[0] === "+" && number[1] === "7" && number.length === 12) {
  //       console.log(true);
  //       break;
  //     }
  //   }
  // }
  // isValidNumber("+7875124732");
  
  // Task-11
  // Mətni parametr kimi qəbul edən və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın.
  // "15263538479359486()-="';:!@#$%^&*()"
  // REGEX()
  
  // function numCounter(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     let count = 0;
  //     if (
  //       str[i] === "q" ||
  //       "w" ||
  //       "e" ||
  //       "r" ||
  //       "t" ||
  //       "y" ||
  //       "u" ||
  //       "i" ||
  //       "o" ||
  //       "p" ||
  //       "a" ||
  //       "s" ||
  //       "d" ||
  //       "f" ||
  //       "g" ||
  //       "h" ||
  //       "j" ||
  //       "k" ||
  //       "l" ||
  //       "z" ||
  //       "x" ||
  //       "c" ||
  //       "v" ||
  //       "b" ||
  //       "n" ||
  //       "m" ||
  //       "ü" ||
  //       "ə" ||
  //       "ğ" ||
  //       "ö" ||
  //       "ı" ||
  //       "ç" ||
  //       "ş" ||
  //       "Q" ||
  //       "W" ||
  //       "E" ||
  //       "R" ||
  //       "T" ||
  //       "Y" ||
  //       "U" ||
  //       "I" ||
  //       "O" ||
  //       "P" ||
  //       "A" ||
  //       "S" ||
  //       "D" ||
  //       "F" ||
  //       "G" ||
  //       "H" ||
  //       "J" ||
  //       "K" ||
  //       "L" ||
  //       "Z" ||
  //       "X" ||
  //       "C" ||
  //       "V" ||
  //       "B" ||
  //       "N" ||
  //       "M" ||
  //       "Ü" ||
  //       "Ə" ||
  //       "Ğ" ||
  //       "Ö" ||
  //       "I" ||
  //       "Ç" ||
  //       "Ş"
  //     ) {
  //       count++;
  //     } else {
  //       count = count;
  //     }
  //   }
  // }
  // console.log(numCounter("gajdbWpic{}?><"));
  