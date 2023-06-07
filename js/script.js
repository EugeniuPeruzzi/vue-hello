'use strict';

const { createApp } = Vue

createApp({
data() {
    return {
        obj: {
            message: '<h1>Hello World!</h1>',
            immage : '<img src="https://picsum.photos/200/300" alt="pic">'
        }
    }
}
}).mount('#Q')