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
// replaceGuest(unAvailableGuest,  newGuest, guestList);
guestList.unshift({name: 'Tesla'});
guestList.splice(2, 0, {name: 'Nelson Mandella'});
guestList.push({name: 'Dr AbdulQADEER Khan'});
guestList.forEach(guest=>console.log(`Greetings! Welcome Sir ${guest.name}`));
console.log(`We have got a bigger table...!! 😊`);

//counting the no of people, invited.
console.log(`We are inviting ${guestList.length} people to join us on the dinner table.`);
