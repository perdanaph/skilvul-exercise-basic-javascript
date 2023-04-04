// No 1

let division = 'HR';
let job = '';

if (division == 'HR') {
  job = 'Tugas saya adalah melakukan recrutment terhadap pegawai baru';
} else if (division == 'OB') {
  job = 'Tugas saya menjaga kebersihan';
}

// No 2
let valueOne = 6;
let valueTwo = 6;

let equal = '';
if (valueOne > valueTwo) {
  equal = 'nilai pertama lebih besar dari pada nilai kedua';
} else if (valueOne < valueTwo) {
  equal = 'nilai kedua lebih besar dari pada nilai pertama';
} else if (valueOne == valueTwo) {
  equal = 'nilai pertama sama dengan nilai kedua';
}

// No 3
const dayInNumber = 1;
let day = '';

switch (dayInNumber) {
  case 1:
    day = 'minggu';
    break;
  case 2:
    day = 'senin';
    break;
  case 3:
    day = 'selasa';
    break;
  case 4:
    day = 'rabu';
    break;
  case 5:
    day = 'kamis';
    break;
  case 6:
    day = "jum'at";
    break;
  case 7:
    day = 'sabtu';
    break;
  default:
    day = 'hari cuma sampe 7 doang';
    break;
}

// No 4
const move = '';
let action = '';

switch (move) {
  case 'UP':
    action = 'Karakter berjalan keatas';
    break;
  case 'RIGHT':
    action = 'Karakter berjalan ke kanan';
    break;
  case 'BOTTOM':
    action = 'Karakter berjalan ke bawah';
    break;
  case 'LEFT':
    action = 'Karakter berjalan ke kiri';
  default:
    action = 'Mohon masukkan keyword move berupa UP, RIGHT, BOTTOM, atau LEFT';
    break;
}

console.log(action);
