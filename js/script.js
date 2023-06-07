'use strict';
let vipTable = 'Tavolo VIP'

let guests = [ 
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
];

for (let i = 0; i<guests.length; i++){

    let guestsCiclato = guests[i];


    let objs = [
        {
            'tableName' : vipTable,
            'nome': guestsCiclato ,
            'seatTaken' : i + 1
        }
    ];

    for (let j = 0; j<objs.length; j++){
        
        let stamp = objs[j];
        
        console.log(stamp.tableName);
        console.log(stamp.nome);
        console.log(stamp.seatTaken);
    };
    
};

