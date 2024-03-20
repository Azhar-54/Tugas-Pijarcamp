//data dari soal
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
// console.log(data);
//mengubah data menggunakan spread operator
let dataBaru = {
  ...data,
  name: "Burhanudin Azhar",
  email: "burhanudinazhar3@gmail.com",
  hobby: "gaming,reading",
};
// console.log(dataBaru);
//mengambil street dan city menggunakan destructuring
const { street, city :kota } = data.address;

console.log(street);
console.log(kota);
