// curList = 0;
// listInteral = setInterval(nextList, 2000);
// console.log(lists);
// lists.onclick = function(event) {
//     let target = event.target;
//     if (target.className != "active") return;
//     target.classList.add();
// }

// function highlight(active) {
//     if (selectedClass) {

//     }
// }



// lists.addEventListener("click", function() {
//     lists[0].classList.add("active");
// });
window.addEventListener('keydown', function(e) {
    var lists = document.querySelector(`.list[keyCode="${e.keyCode}"]`);

    lists.forEach(function(item) {

        item.addEventListener("click", function() {
            let target = event.item;

            lists[e].classList.add("active");
            console.log(item);
            console.log(target);
        })
    });
});