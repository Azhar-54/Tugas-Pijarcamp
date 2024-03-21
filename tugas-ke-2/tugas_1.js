//membuat 10 method javascript

//1.method push digunakan untuk menambah 1 atau lebih elemnt di akhir sebuah array
const push = [1, 2, 3, 4];
console.log("sebelum menggunakan method push " + push);
push.push(5);
console.log(`setelah menggunakan method push ${push}`);

//2.method pop menghilangkan element di akhir array
const pop = [1, 2, 3, 4, 5];
console.log(`sebelum menggunakan pop ${pop}`);
pop.pop();
console.log(`setelah menggunakan pop ${pop}`);

//3.method unshift menambahkan data di awal array
const number = [3, 4, 5];
console.log("sebelum menggunakan method unshift " + number);
number.unshift(1, 2);
console.log("setelah menggunakan method unshift " + number);

//4.method shift mengilangkan element di awal array
const number1 = [1, 2, 3, 4, 5];
console.log("sebelum menggunakan method shift " + number1);
number1.shift();
console.log("setelah menggunakan method shift " + number1);

//5.method indexOf digunakan untuk mencari letak sebuah index dalam array
const item = ["banana", "18", "tehe"];
console.log("sebelum menggunakan method indexOf  " + item);
const index = item.indexOf("banana");
console.log(
  "setelah menggunakan method indexOf  maka akan menunjukan index ke berapa element yang di sebutkan " +
    "dalam hal ini banana adalah index ke: " +
    index
);

// 6. method lastIndexOf mengembalikan nilai index dari urutan terakhir di sebuah array
const index1 = [1, "2", "3", "4", 1];
console.log(index1);
console.log(index1.lastIndexOf(1));

//7. method slice digunakan untuk memilih beberapa element di dalam array dan mengembalikannya ke array yang baru
const makanan = ["nasi goreng", "ayam goreng", "sop iga", "teh manis"];

const minuman = makanan.slice(3);
console.log(minuman);

//8. method every() mengembalikan nilai true jika semua kondisi di method every terpenuhi
const kondisi = (kondisiTerpenuhi) => kondisiTerpenuhi < 50;

const nilai = [29, 15, 26, "35", "25"];

console.log(nilai.every(kondisi));

//9. method fill() mengubah semua element dalam index yang sudah di tentukan
const isi = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(isi.fill(1, 2, 5));

//10. method concat digunakan untuk menggabungkan 2 atau lebih nilai pada array 
    const huruf=["a","b","c","d","e"]
    const angka=[1,2,3,4,5,]
    
    console.log(huruf.concat(angka))