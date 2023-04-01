const exercise1 = document.getElementById('exercise1');
const exercise2 = document.getElementById('exercise2');
const exercise3 = document.getElementById('exercise3');
const exercise4 = document.getElementById('exercise4');
const exercise5 = document.getElementById('exercise5');

// Excercise 1
let user = '';
for (let i = 1; i <= 100; i++) {
  user += `<p>User ke-${i}</p>`;
}
exercise1.innerHTML = user;

// exercise 2
let number = 0;
let text = '';
for (let i = 0; i < 10; i++) {
  number += 2;
  text += `<p>perulangan ke ${i} nilai: ${number}</p>`;
}
exercise2.innerHTML = text;

// exercise 3
let content = '';
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    content += `<p>perulangan ke ${i} nilai: genap</p>`;
  } else {
    content += `<p>perulangan ke ${i} nilai: ganjil</p>`;
  }
}
exercise3.innerHTML = content;

// // exercise 4
// let textConfirm = '';
// let counter = 0;
// let bool = true;

// while (bool) {
//   let question = confirm('Apakah anda mau mengulang');
//   question ? (counter += 1) : (bool = false);
// }

// textConfirm += `Perulangan sudah dilakukan sebanyak ${counter} kali`;
// exercise4.innerHTML = textConfirm;

// // exercise 5
// let textQuiz = '';
// while (true) {
//   let question = prompt('Sebutkan kepanjangan dari nama IB');
//   let answer = 'Impact Byte';
//   if (question == answer || question == answer.toLocaleLowerCase) {
//     alert('Selamat jawaban anda benar');
//     break;
//   }
// }
