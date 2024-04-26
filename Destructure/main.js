const student = ["Muhammad irsyad", "14 April 2000", "Kelas MERN"];
const [pertama, kedua, ketiga] = student;
console.log(pertama);

const murid = {
  nama: "Muhammad irsyad object",
  tanggalLahir: "14 April 2000",
  kelas: "MERN",
  alamat: {
    kelurahan: "Tegal Parang",
    kecamatan: "Mampang prapatan",
  },
};

const { nama, tanggalLahir, kelas, alamat } = murid;
console.log(nama);

function destructure({ nama, tanggalLahir, kelas }) {
  console.log(
    `halo nama saya ${nama} saya lahir pada tanggal ${tanggalLahir} saya mengikuti kelas ${kelas}`
  );
}

destructure(murid);
