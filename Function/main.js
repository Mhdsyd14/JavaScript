alert(
  "Selamat datang di game tebak angka! Kamu akan bermain dalam 5 ronde. Pemain yang berhasil menebak angka terbanyak akan menang. SELAMAT BERMAIN!"
);

// Fungsi untuk menghasilkan angka acak antara 1 dan 3
function generateRandomValue() {
  return Math.floor(Math.random() * 3) + 1;
}
let jawabanBenerP1 = 0;
let JawabanBenerP2 = 0;

// Fungsi untuk melakukan satu ronde permainan
function playRound(round) {
  const randomValue = generateRandomValue();
  const player1 = prompt(
    `Player 1: Masukkan angka (1-3) jawabannya ${randomValue}`
  );
  const player2 = prompt("Player 2: Masukkan angka (1-3)");

  // Periksa input pemain
  if (player1 === player2) {
    alert("Tebakan tidak boleh sama.");
  } else if (player1 < 1 || player1 > 3 || player2 < 1 || player2 > 3) {
    alert("hasil tidak boleh lebih dari 3 atau kurang dari satu");

    // playGame(round);
    round--;
  } else if (player1 != randomValue && player2 != randomValue) {
    alert("hasil seri");
  } else {
    if (player1 == randomValue) {
      alert("Player 1 benar!");
      jawabanBenerP1++;
    }
    if (player2 == randomValue) {
      alert("Player 2 benar!");
      JawabanBenerP2++;
    }
  }

  // Tampilkan ronde
  if (round == 6) {
    if (jawabanBenerP1 > JawabanBenerP2) {
      return alert(
        `Permainan selesai yang menang p1 dengan skor ${jawabanBenerP1} dan p2 dengan skor ${JawabanBenerP2}`
      );
    } else if (JawabanBenerP2 > jawabanBenerP1) {
      return alert(
        `Permainan selesai yang menang p2 dengan skor ${JawabanBenerP2} dan p1 dengan skor ${jawabanBenerP1}`
      );
    } else {
      return alert("serii");
    }
  }

  alert(`Ronde ${round}`);
  round++;
  playGame(round);
}

// Fungsi untuk menjalankan seluruh permainan
function playGame(a) {
  // for (let round = a; round <= 6; round++) {
  playRound(a);
  // }
}

// Mulai permainan
playGame(2);
