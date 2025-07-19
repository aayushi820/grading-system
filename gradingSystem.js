let students = [
    {name:"aayushi", marks:95},
    {name:"ravi", marks: 68},
    {name:"kunal", marks:79},
    {name:"neha", marks:56},
    {name:"megha", marks:72},
    {name:"abhay", marks:18},
]

let passedstudents = students.filter(function(student){
    return student.marks > 35;
});
passedstudents.sort(function(a,b){
    return b.marks - a.marks;
});

let gradedstudents = passedstudents.map(function(student){
    let grade;
    if(student.marks >= 90){
        grade = "A+";
    }
    else if(student.marks >=75 && student.marks < 90){
        grade = "A";
    }
    else if(student.marks >= 60 && student.marks <75){
        grade = "B";
    }
    else{
        grade = "C";
    }
    return student.name + " : " + student.marks + " marks " + grade;
});

gradedstudents.forEach(function(line){
    console.log(line);
});