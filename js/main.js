var lists = document.querySelectorAll("#lists .list"),
    curList = 0;
// listInteral = setInterval(nextList, 2000);
console.log(lists);
lists.onclick = function(event) {
    let target = event.target;
    if (target.className != "active") return;
    highlight(target);
}

function highlight(active) {
    if (selectedClass) {

    }
}