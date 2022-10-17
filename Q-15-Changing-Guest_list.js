let guestList = [
    { name: 'Ali Jinnah'},
    { name: 'Allama Iqbal'},
    { name: 'Tesla'}
];
let newGuest = 'Dr. Israr Ahmad';
let unAvailableGuest = 'Tesla';
let replaceGuest = (oldGuest, newGuest, list) => {
    list.forEach((item) => {
        if (item.name==oldGuest) {
            item.name = newGuest;
        }
    })
}
replaceGuest(unAvailableGuest,  newGuest, guestList);
guestList.forEach(guest=>console.log(`Greetings! Welcome Sir ${guest.name}`));
console.log(`Sorry to inform you that Sir ${unAvailableGuest} won't be able to join this room.`);