# Penjelasan mengenai Truthy dan Falsy

## Pengertian 
Truthy dan falsy merupakan sebuah nilai non-boolean yang ditambahkan nilai boolean. Penjelasan lebih lengkapnya ada di bawah

### Falsy
Menurut dokumentasi [mdn](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

> Falsy adalah sebuah nilai yang ditetapkan sebagai boolean dengan nilai false

Di dalam dokumentasi mdn juga dijelaskan bahwa javascript menggunakan *[type conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)* yaitu suatu proses untuk mengubah type data dari sebuah data ke type data yang Boolean atau yang lainnya. 

Singkatnya falsy adalah nilai yang di tentukan oleh javascript untuk menjadi false. Ada 8 nilai ditetapkan  secara default false oleh javascript
1. False
2. 0
3. ""
4. null
5. undifine
6. NaN
7. -0
8. 0n
Contoh Kode dalam javscript: 
```
console.log(Boolean(false)); 
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
```
Semua hasil dari log tersebut adalah false.
Intinya falsy adalah suatu nilai yang memiliki nilai boolean false.

### Truthy 
Dokumentasi [mdn](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) menyebutkan bahwa Truthy adalah
> Sebuah value yang memiliki nilai true dalam konteks boolean

Semua nilai di javascript adalah true kecuali yang termasuk dalam nilai Falsy
contoh kode dalam javascript:
```
console.log(Boolean("false"));
console.log(Boolean(123));
console.log(Boolean(Infinity));
console.log(Boolean(Date()));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function(){}));
```
Jadi intinya Truthy adalah kebalikan dari Falsy dan jika ingin mengetahui nilai apa saja dari Truthy maka cukup lihat saja nilai dari Falsy jika nilai tersebut merupakan nilai Falsy maka nilai tersbut bukanlah Truthy

## Ringkasan
* Falsy adalah nilai-nilai yang memiliki nilai false dalam konteks boolean
* Truthy adalah nilai-nilai yang memiliki nilai true dalam konteks boolean
* Semua nilai di javascript bernilai true dalam konteks boolean kecuali 
    * false
    * 0
    * ""
    * null
    * undifine
    * NaN
    * 0n
    * -0