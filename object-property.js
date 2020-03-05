const students = [
    {id: 70, name: '"Abrar"'},
    {id: 83, name: "Mehedi"},
    {id: 88, name: "Shadin"},
    {id: 21, name: "Tarak"},
    {id: 40, name: "Lubs"},
    {id: 96, name: "rita"}
];
//const names=students.map ( s=> s.name);
//const ids=students.map (s =>s.id);
const bigger = students.filter(s => s.id > 50);
const biggerOne = students.find(s => s.id > 70);
console.log(biggerOne);