const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];
const searchName = (huruf, limit, callback) =>{
    // Melakukan pencarian nama berdasarkan huruf yang di sebutkan 
    const filteredNames = names.filter(name => name.toLowerCase().includes(huruf.toLowerCase()));

    // Menggunakan callback untuk menampilkan hasil pencarian sesuai dengan limit
    callback(filteredNames.slice(0, limit));
}

// Callback function untuk menampilkan hasil pencarian
const hasilPencarian = (hasil) => {
    console.log("Hasil pencarian:");
    hasil.forEach(result => console.log(result));
}

const huruf = "an";
const limit = 5;

searchName(huruf, limit, hasilPencarian);