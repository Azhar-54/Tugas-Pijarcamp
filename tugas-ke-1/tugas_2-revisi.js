
function un(nilaiBahasaIndonesia,nilaiBahasaInggris,nilaiMatematika,nilaiIpa){
  //melakukan validasi nilai un 
    if(!nilaiBahasaIndonesia|| !nilaiBahasaInggris| !nilaiIpa  || !nilaiMatematika){
        console.log("harap memasukan ke empat nilai terlebih dahulu")
        return
        }

    //mencari grade setelah nilai rata-rata ditemukan
        if(hasil >=90 && hasil <= 100 ){
            console.log('Grade = A')
        }else if(hasil >=80 && hasil  <= 89 ){
            console.log("Grade = B")
        }else if(hasil >=70 && hasil <= 79){
            console.log("Grade = C")
        }else if(hasil >= 60 && hasil <= 69){
            console.log("Grade = D")
        }else if(hasil >= 0 && hasil <= 59){
            console.log("Grade = E")
        }else {
            console.log("Tidak ada nilai yang di masukan / Nilai Lebih dari = 100")
        }
    
    }
    
    un(82,87,89)