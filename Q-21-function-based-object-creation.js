let car = {
    name: '',
    model: ''
}; // model object for a car.

function createObject(name, model){
    const newObj = Object.create(car);
    newObj.name = name;
    newObj.model = model;
    return newObj;
};

console.log(createObject("Suzuki", "2016"));
console.log(createObject("Mercedes", "2023"));