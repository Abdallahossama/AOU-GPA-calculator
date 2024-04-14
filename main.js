// courses 
const data = [

];
// Display courses
function Display() {
  document.getElementById("tbody").innerHTML = "";
  for (subject of data) {
    const row = `
            <tr>
              <td>${subject.title}</td>
              <td>${subject.credit}</td>
              <td>${subject.grade}</td>
            </tr>
`;

    document.getElementById("tbody").innerHTML += row;
  }
}
Display();

// add course
document.getElementById("btn_add").addEventListener("click", function () {
  let course_name = document.getElementById("course").value;
  let credit = document.getElementById("credits").value;
  let grade = document.getElementById("grade").value;

  // Check if credit is a valid number
  if (isNaN(credit) || credit === "") {
    document.getElementById("warning").textContent =
      "Please enter a valid number in the Credits field.";
    return; // Stop execution if credit is invalid
  }

  // Clear warning message
  document.getElementById("warning").textContent = "";

  data.push({
    title: course_name,
    credit: parseInt(credit), // Convert credit to integer
    grade: grade,
  });

  // Clear input fields
  document.getElementById("course").value = "";
  document.getElementById("credits").value = "";

  Display();
});

// remove course
document.getElementById("minus").addEventListener("click", function () {
  data.pop();
  const tbody = (document.getElementById("tbody").innerHTML = "");
  Display();
});

// calculate gpa
document.getElementById("calc").addEventListener("click", function () {


  document.getElementById("gpa").innerHTML = "";
  let sumofgrade = 0;
  let sum_h = 0;
  let graderesult = 0;
  for (subject of data) {
    const credit = subject.credit;
    const grade = subject.grade;

    if ("A" == grade) {
      graderesult = credit * 4.0;
    } else if ("B+" == grade) {
      graderesult = credit * 3.5;
    } else if ("B" == grade) {
      graderesult = credit * 3.0;
    } else if ("C+" == grade) {
      graderesult = credit * 2.5;
    } else if ("C" == grade) {
      graderesult = credit * 2.0;
    } else if ("D" == grade) {
      graderesult = credit * 1.5;
    } else if ("F" == grade) {
      graderesult = credit * 0;
    }
    sumofgrade += graderesult;
    sum_h += credit;
  }
  const gpa = sumofgrade / sum_h;
  if (isNaN(gpa) || gpa === "") {
    document.getElementById("gpa").textContent =
      "Please enter a data in the  field.";
    return; // Stop execution if credit is invalid
  }else{
      document.getElementById("gpa").innerHTML = `Total GPA : ${gpa.toFixed(2)}` ;
  }
});
