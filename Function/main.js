alert(
  "Selamat datang di game tebak angka! Kamu akan bermain dalam 5 ronde. Pemain yang berhasil menebak angka terbanyak akan menang. SELAMAT BERMAIN!"
);

// Fungsi untuk menghasilkan angka acak antara 1 dan 3
function generateRandomValue() {
  return Math.floor(Math.random() * 3) + 1;
}

let jawabanBenerP1 = 0;
let jawabanBenerP2 = 0;

// Fungsi untuk melakukan satu ronde permainan
function playRound(round) {
  const randomValue = generateRandomValue();
  const player1 = prompt(`Player 1: Masukkan angka (1-3)`);
  const player2 = prompt("Player 2: Masukkan angka (1-3)");

  // Periksa input pemain
  if (player1 === player2) {
    alert("Tebakan tidak boleh sama.");
    round--;
  } else if (player1 < 1 || player1 > 3 || player2 < 1 || player2 > 3) {
    alert("Angka harus antara 1 dan 3 tidak boleh lebih dari itu.");
    round--;
  } else if (player1 != randomValue && player2 != randomValue) {
    alert("Hasil seri.");
    round--;
  } else {
    if (player1 == randomValue) {
      jawabanBenerP1 += 1;
      alert(
        `Player 1 benar! Skor saat ini - Player 1: ${jawabanBenerP1} dan Player 2: ${jawabanBenerP2}`
      );
    }
    if (player2 == randomValue) {
      jawabanBenerP2 += 1;
      alert(
        `Player 2 benar! Skor saat ini - Player 1: ${jawabanBenerP1} dan Player 2: ${jawabanBenerP2}`
      );
    }
  }

  // Tampilkan ronde
  if (round === 6) {
    if (jawabanBenerP1 > jawabanBenerP2) {
      return alert(
        `Permainan selesai. Player 1 menang dengan skor player 1 adalah  ${jawabanBenerP1} dan player 2 adalah  ${jawabanBenerP2}`
      );
    } else if (jawabanBenerP2 > jawabanBenerP1) {
      return alert(
        `Permainan selesai. Player 2 menang dengan skor player 2 adalah  ${jawabanBenerP2} dan player 1 adalah ${jawabanBenerP1}`
      );
    } else {
      return alert(
        `Permainan selesai. Hasilnya seri dengan skor player 1 =  ${jawabanBenerP1} dan player 2 = ${jawabanBenerP2}`
      );
    }
  }

  alert(`Ronde ${round} `);
  playGame(round + 1);
}

// Fungsi untuk menjalankan seluruh permainan
function playGame(round) {
  playRound(round);
}

// Mulai permainan dari ronde 1
playGame(2);
