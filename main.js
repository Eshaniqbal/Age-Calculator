
function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();
  const diff = today - dob;
  const ageInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const ageInYears = Math.floor(ageInMonths / 12);
  const remainingMonths = ageInMonths % 12;
  document.getElementById("age").textContent = `${ageInYears} years and ${remainingMonths} months`;
}
