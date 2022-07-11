window.onload = function() {    
    let szekek = document.getElementsByClassName("szek");
    const ules = document.querySelectorAll(".szek");
function aktiv() {
    for(let i = 0; i < szekek.length; i++) {
        szekek[i].onclick = function () {
            if (ules[i].classList.contains('szek-f') == false)
            {
            szekek[i].classList.add('szek-r');
            }
        }
    }
}
function inaktiv() {
    document.getElementById("delete").onclick = function() {deleter(), alert('Kiválasztottak törölve!')}
}
function deleter() {
for (let c = 0; c < ules.length; c++) {
    ules[c].classList.remove('szek-r');
}
}
function valto() {
    for (let z = 0; z < ules.length; z++) {
        if (ules[z].classList.contains('szek-r') == true)
        {
        ules[z].classList.remove('szek-r');
        ules[z].classList.add('szek-f');
        }
      }
}
function undofoglal() {
    for (let o = 0; o < ules.length; o++) {
        if (ules[o].classList.contains('szek-f') == true)
        {
        ules[o].classList.remove('szek-f');
        }
      }
}
function kifoglal() {
    document.getElementById("fdelete").onclick = function() {
        undofoglal(),
        alert('A helyfoglalásod töröltük!')};
}
function lefoglal() {
    document.getElementById("felvesz").onclick = function() {
        valto(),
        alert('Hely lefoglalva!')};
}
aktiv();
inaktiv();
lefoglal();
kifoglal();
};
