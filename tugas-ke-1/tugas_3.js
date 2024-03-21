//membuat segitiga terbalik
const printSegitga = 7 
  let hasil = "";
  counter = 1;
  for (let i = 0; i < printSegitga; i++) {
    for (let j = printSegitga; j > i; j--) {
      hasil += counter++ + " ";
    }
    counter = 1;
    hasil += '\n';
  }

console.log(hasil)

