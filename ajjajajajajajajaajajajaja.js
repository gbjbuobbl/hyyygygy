function adduser() {
    player1_name = document.getElementById("player1name").value;
    player2_name = document.getElementById("playe21name").value;

    localStorage.setItem("player1name", player1_name);
    localStorage.setItem("player2name", player2_name);

    window.location = "game_page.html";
}