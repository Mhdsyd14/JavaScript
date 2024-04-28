const umur = 70;
const keterangan = umur > 50 ? "sudah tua" : "masih muda";
console.log(keterangan);

const kondisiAnd = umur < 50 && "Masih muda dong";
const kondisiOr = umur > 50 || "hello world";

console.log(kondisiAnd);
console.log(kondisiOr);

const buku = [
  {
    judul: "Ini buku",
    harga: 250750,
  },
  {
    judul: "Ini terbaru",
    harga: 300750,
  },
  {
    judul: "Menuju surga",
    harga: 400750,
  },
];

const listJudul = buku.map((cerita) => cerita.judul);
console.log(listJudul);

const priceBuku = buku.filter((priceList) => priceList.harga > 160750);
console.log(priceBuku);
