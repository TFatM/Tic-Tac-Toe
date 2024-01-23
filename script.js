// string який є символом гравця
let playerSymbol = "X";
// слідкує за тим чи гра закічилась
let gameEnd = false

// перевіряє на яку клітинку нажав гравець
for (let i = 1; i <= 9; i++){
  document.getElementById(i.toString()).addEventListener("click",
    function () {
// умови при яких якщо клітинка не пуста, гра ще не закінчена
      if (this.innerHTML === "" && !gameEnd) {
        // клас який додає символ
        this.innerHTML = playerSymbol;
        this.classList.add(playerSymbol.toLowerCase());
                
        checkWin();

                // після того, як використанний символ Х, використовується символ О
                        if (playerSymbol === "X")
                          playerSymbol = "O"
                        else
                          playerSymbol = "X"
              }
          });
        }
        // варніанти 'Переможних' позицій на тіблиці 3х3
        let winPos = [
          [1, 2, 3], [4, 5, 6],
          [7, 8, 9], [1, 4, 7],
          [2, 5, 8], [3, 6, 9],
          [1, 5, 9], [3, 5, 7]
        ];
        // фунція для перевірки умов перемоги
        function checkWin() {
          // цикл через всі переможні позиції
          for (let i = 0; i < winPos.length; i++){
        // цикл який перевіряє всі клітинки на наявність симовлу
            if (
              document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
              document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
              document.getElementById(winPos[i][2]).innerHTML === playerSymbol
              ) {
                // умова при якій, якщо всі символи в лінії, вона дорівнює true
                // і додає повідомлення про перемогу
                      document.getElementById(winPos[i][0]).classList.add("win");
                      document.getElementById(winPos[i][1]).classList.add("win");
                      document.getElementById(winPos[i][2]).classList.add("win");
                      gameEnd = true;
                      
                    setTimeout(function () {
                      alert(playerSymbol + " win!");
                    }, 500);
                  }
                }
              }
              
      
document.getElementById("reset").addEventListener(
  "click",
  function () {
  
    for (let i = 1; i <= 9; i++){
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("win");
      gameEnd = false;
    }
  });