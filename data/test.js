function as() {
    var time = 100;
    $('.answer-box').each(function(i, n) {
        setTimeout(() => {
            $(n).click();

        }, time += 1000);
    })
}

setInterval(() => {
    as();
}, 4000);