# Switch Case

## Fungsi

Fungsi Switch Case hampir sama dengan if else statement yaitu untuk melakukan pengecekan suatu kondisi

Switch Case biasa digunakan untuk membandingkan banyak variable dengan banyak nilai tetap

## Sturktur Kode

### struktur dasar kode

Secara garis besar sintak standar untuk membuat switch case adalah seperti dibawah ini:

```javascript
const numb = 5
switch (numb) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;    
    default:
        console.log("Out of Number");
        break;
}
```

Kodenya cukup mudah dibaca, pertama ada pendeklarasian variable numb yang akan dijadikan sebagai case.
Kemudian ada statement ```switch(numb){...``` yang mana ini akan memulai proses pengkondisian pada variable numb.

Kemudian dibawahnya ada ```case 1:``` jika dibaca dengan bahasa manusia maka "numb == 1" kemudian lakukan proses yang ada didalam cakupan case 1 yaitu ```console.log(1); break;``` fungsi console.log(1) akan dijalankan menampilkan angka 1 pada terminal dan proses break juga akan dijalankan yang mana berfungsi untuk tidak melanjutkan pengecekan pada case seterusnya dan break disini sifatnya opsional

Kemudian jika case atau kondisi dari variabel numb tidak sama dengan case 1 maka case selanjutnya akan diajalankan yaitu ```case 2:``` dan jika variabel numb value atau nilainya sama dengan case 2 maka akan menjalankan proses yang ada dalam cakupan case 2 yaitu ```console.log(1); break;```

Dan jika nilai dari variabel numb tidak sama dengan case 1 maupun case 2 maka nilai default akan dijalankan yaitu ```console.log("Out of Number"); break;```

### struktur switch case jika break adalah opsional

```javascript
const nameId = "Dadang"
switch (nameId) {
    case "John":
    case "Joan":
    case "Jane":
        console.log(`Amigos ${nameId}`);
        break;
    case "Dadang":
        console.log(`Hallo ${nameId}`);
        break;
    default:
        console.log(`Idk who are you ${nameId} let's be friend:)`);
        break;
}
```

variabel nameId isinya string yang akan dibandingkan dengan case yang ada di Switch Case.
Pada urutan case pertama dan kedua ```case "John":, case "Joan":``` tidak memiliki aksi atau break jika casenya benar.
Sebagai gantinya jika salah satu pada case "john" atau "Joan" nilainya true maka akan menjalankan aksi yang ada pada ```case "Jane":``` yaitu ```console.log(`Amigos ${nameId}`); break;```

## Fungsi Break

```break``` berfungsi untuk menghentikan proses pada switch case

```javascript
const nameId = "Dadang"
switch (nameId) {
    case "John":
    case "Joan":
    case "Jane":
        console.log(`Amigos ${nameId}`);
    case "Dadang":
        console.log(`Hallo ${nameId}`);
    default:
        console.log(`Idk who are you ${nameId} let's be friend:)`);
}
```

Jika ```break``` tidak ada dan nilai dari nameId adalah ```"Jhon"``` atau ```"Joan"``` atau ```"Jane"``` maka semua proses yang ada pada case akan dijalankan
Jika ```break``` tidak ada dan nilai dari nameId adalah ```"Dadang"``` maka proses yang ada pada case ```"Dadang"``` dan case defaultnya akan dijalankan akan dijalankan
Dan jika ```break``` tidak ada dan nilai dari nameId tidak sama dengan semua case yang ada maka proses yang akan dijalankan hanya proses yang ada pada case default

Jadi break berfungsi untuk menghentikan proses pada suatu case

### Menghapus Case Default

Kita juga bisa meniadakan case default pada Switch Case karena javascript sendiri tidak mewajibkan adanya case default. Contoh:

```javascript
const response = 404
switch (response) {
    case 404:
        console.log("Not Found");
        break;
    case 200:
        console.log("Succes");
        break;
}
```

Kasus seperti ini bisa digunakan jika memang nilai atau valuenya tidak sesuai dan kita tidak ingin melakukan apapun maka case default bisa dihilangkan
