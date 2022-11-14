# Web-Jakmall.com

Created by : Irenna Violla

*untuk web akan ditampilkan normal ketika resolusi sekitar 1536px x 753px

Website Halaman Tampilan pada Delivery, Payment dan Finish

Pada website ini, saya menggunakan react js sebagai bahasa utama dari pembuatan website.
Terdapat tiga halaman untuk website yang telah saya buat yaitu Home.js, Payment.js dan Finish.js

Masing-masing akan saya jelaskan disini.

1. Home.js 
Merupakan halaman pertama dari proses untuk payment, disini terdapat form untuk mengisi email, nomor telepon dan alamat.
Ketika email tidak diisi dengan akhiran ".com" maka border form akan berubah menjadi berwarna orange
jika email sudah diisi dengan benar (dengan akhiran ".com") maka border form email akan berubah warna menjadi hijau.
Begitupun dengan form no telepon, jika no telp kurang dari 6 atau lebih dari 20 angka, maka bordder akan berwarna orange.
Selain itu, jika no telp tidak diawali dengan "08" maka isian tersebut pun tidak valid (border form berwarna orange).
Sebaliknya, jika sudah valid maka border akan berubah menjadi warna hijau.
Sama seperti sebelumnya, alamat pun harus diisi, ketika tidak diisi, maka border akan berwarna orange.
Di form alamat ini terdapat counter atau penghitung dari jumlah character yang dituliskan, 
sehingga form tidak boleh memiliki character lebih dari 120.
Warna border dapat diubah karena menggunakan react hook form untuk menentukan validasi dari form.

Selain tiga form di atas, terdapat dua form dan satu checkbox di sebelah kanannya, jika checkbox di centang (checked),
maka form dropship name dan dropship phone dapat diisi dan harus diisi.
Jika checkbox dalam kondisi unchecked, kedua form tersebut akan disable.

Kemudian di sebelah kanannya terdapat div (bagian) untuk summary, pada summary terdapat informasi berapa barang yang dibeli,
harga dari barang yang sudah di beli, dropshipper fee, total harga dan button untuk lanjut ke halaman payment.
Untuk dropshipper fee, jika kolom checkbox "Send as dropshipper" tercentang, maka dropshipper fee akan berubah menjadi 5900.
Tetapi jika tidak tercentang, maka dropshipper fee akan tetap 0.

Untuk button "Continue to payment" akan memindahkan halaman ke Payment.js. Semua form harus terisi, jika tidak terisi,
maka akan muncul alert bahwa form harus diisi.

2. Payment.js
