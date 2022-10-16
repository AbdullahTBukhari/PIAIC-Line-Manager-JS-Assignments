let list = [
    {
        company: "Honda",
        transport: "Bike",
        name: "CD 70"   
    },
    {
        company: "Astin Martin",
        transport: "Car",
        name: "Supper Leggra"
    }
];
// console.log(list);
// for (let i = 0; i < list.length; i++)
// {
//     console.log(`I would like to drive a ${list[i].name} of ${list[i].company}`);
// }

list.map(listItem => console.log(`I would like to drive a ${listItem.name} of ${listItem.company}`));