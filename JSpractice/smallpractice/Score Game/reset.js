function reset() {
    p1score = 0;
    p2score = 0;
    p1dis.textContent = 0;
    p2dis.textContent = 0;
    p1dis.classList.remove("winer");
    p2dis.classList.remove("winer");
    gameover = false;
}
