"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villanos = 20;
    if (avengers < villanos) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('123a');
    console.log({ avengers: avengers });
});
