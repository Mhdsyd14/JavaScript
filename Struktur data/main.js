// Input
let NamaSiswa = prompt("Masukkan nama siswa:");
let TanggalPendaftaran = prompt("Masukkan tanggal pendaftaran ");
let UmurSiswa = prompt("Masukkan umur siswa:");

const hasil = `halo ${NamaSiswa} kamu telah mendaftar pada tanggal ${TanggalPendaftaran} dan umur kamu adalah ${UmurSiswa}`;
// console.log(hasil);

const inner = document.getElementById("data");
inner.innerHTML = hasil;
