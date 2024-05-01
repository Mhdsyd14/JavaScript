import Table from "../src/module.js";

const tabel = new Table({
  columns: ["Name", "Email"],
  data: [
    ["Muhammad Irsyad", "irsyadmuhammad954@gmail.com"],
    ["Rizal mantopani", "rizal@gmail.com"],
  ],
});
const app = document.getElementById("app");
tabel.render(app);
