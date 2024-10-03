const instructor=[
    {name:'Nodi',age:28,position:'senior'},
    {name:'Akil',age:25,position:'junior'},
    {name:'Shobuj',age:30,position:'senior'},
]

const result=instructor.filter(n=> n.position==='senior').map(n=>n.name);
console.log(result);