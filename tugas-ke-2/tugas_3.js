const cariDanUrutkan = (nilaiAwal, nilaiAkhir, dataArray) => {
    // Validasi nilaiAwal < nilaiAkhir
    if (nilaiAwal >= nilaiAkhir) {
        console.log("nilaiAwal harus lebih kecil dari nilaiAkhir");
        return;
    }

    // Validasi jumlah data dalam dataArray lebih dari 5
    if (dataArray.length <= 5) {
        console.log("Jumlah data dalam dataArray harus lebih dari 5");
        return;
    }

    // Filter data yang memiliki nilai di antara nilaiAwal dan nilaiAkhir
    const filteredData = dataArray.filter(data => data > nilaiAwal && data < nilaiAkhir);

    // Mengurutkan hasil pencarian
    filteredData.sort((a, b) => a - b);

    console.log("Hasil pencarian yang diurutkan: " + filteredData);
}


const dataArray = [7, 2, 10, 5, 3, 8, 12, 6, 9];
const nilaiAwal = 3;
const nilaiAkhir = 9;

cariDanUrutkan(nilaiAwal, nilaiAkhir, dataArray);