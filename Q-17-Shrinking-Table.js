let guestList = [
    { name: 'Ali Jinnah'},
    { name: 'Allama Iqbal'},
    { name: 'Tesla'}
];
guestList.forEach(guest=>console.log(`The List inculudes ${guest.name}`));
console.log(`\b`);
// let newGuest = 'Dr. Israr Ahmad';
// let unAvailableGuest = 'Tesla';
// let replaceGuest = (oldGuest, newGuest, list) => {
//     list.forEach((item) => {
//         if (item.name==oldGuest) {
//             item.name = newGuest;
//         }
//     })
// }
// replaceGuest(unAvailableGuest,  newGuest, guestList);
// guestList.unshift({name: 'Tesla'});
// guestList.splice(2, 0, {name: 'Nelson Mandella'});
// guestList.push({name: 'Dr AbdulQADEER Khan'});
// guestList.forEach(guest=>console.log(`Greetings! Welcome Sir ${guest.name}`));
// console.log(`The bigger table will not be available, Thus only two people shall be invited to join.`);



// removal from start of list
console.log(`Sorry sir! ${guestList.shift().name}`)
guestList.forEach(guest=>console.log(`Invitees are ${guest.name}`));
console.log(`\b`);

// removal from end of list
console.log(`Sorry sir! ${guestList.pop().name}`)
guestList.forEach(guest=>console.log(`Invitees are ${guest.name}`));
console.log(`\b`);

// removal from the middle of list
guestList.splice(2,2).map(person=>console.log(`Sorry, Sir ${person.name}`))
guestList.forEach(guest=>console.log(`Invitees are ${guest.name}`));
console.log(`\b`);

// removal of everyone from the list
guestList.splice(0).map(person=>console.log(`Sorry, Sir ${person.name}`))
let display = (list)=>{
    if (!list.name) { console.log(`Alas! There are no participants in list.`); }
    else console.log(`Invitees are ${list.name}`)};
    display(guestList);
