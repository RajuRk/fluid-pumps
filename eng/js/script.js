const form = document.getElementById("form");
const studentName = document.getElementById("name");
const studentEmail = document.getElementById("email");
const studentTel = document.getElementById("tel");
const studentCity = document.getElementById("city");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  const studentNameValue = studentName.value.trim();
  const studentEmailValue = studentEmail.value.trim();
  const studentTelValue = studentTel.value.trim();
  const studentCityValue = studentCity.value.trim();

  if (studentNameValue === "") {
    setErrorFor(studentName, "Username Cannot be blank");
  } else {
    console.log("Success");
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "fields error";
  small.innerText = message;
};
