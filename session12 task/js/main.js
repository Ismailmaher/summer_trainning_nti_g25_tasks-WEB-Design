// var physics = Number(window.prompt("Enter marks of Physics:"));
// var chemistry =Number(window.prompt("Enter marks of Chemistry:"));
// var biology =Number(window.prompt("Enter marks of Biology:"));
// var mathematics =Number(window.prompt("Enter marks of Mathematics:"));
// var computer =Number(window.prompt("Enter marks of Computer:"));
// var totalMarks = physics + chemistry + biology + mathematics + computer;
// var percentage = (totalMarks / 500) * 100;
// var grade;
// if (percentage >= 90) {
//    console.log("Grade=A")
// } else if (percentage >= 80) {
//    console.log("Grade=B")
// } else if (percentage >= 70) {
//  console.log("Grade=C")
// } else if (percentage >= 60) {
//    console.log("Grade=D")
// } else if (percentage >= 40) {
//    console.log("Grade=E")
// } else {
//    console.log("Grade=F")
// }
// console.log("Total Marks: " + totalMarks);
// console.log("Percentage: " + percentage + "%");










// for(var i=1;i<=10;i++){
// var fullName =prompt("Enter your full name:");
// if(fullName=='ahmed'||fullName=='mohamed'||fullName=='Ahmed'||fullName=='Mohamed'){
//     alert("Welcome to our website, " + fullName + "!");
//     break;
// }
// }
// console.log(fullName)





function looping(start, end, skip, stop) {
  if (start === undefined || end === undefined || skip === undefined || stop === undefined) {
    console.log('Please enter all four numbers');
  } else {
    for (let i = start; i <= end; i++) {
      if (i === skip) {
        continue;
      }
      if (i === stop) {
        break;
      }
      
      console.log(i);
    }
  }
}

looping(2, 25, 7, 15);