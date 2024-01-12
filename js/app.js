// Initialize step and form values
let step = 1;
const formValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
  paymentMethod: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

// Handle form change
function handleFormChange(event) {
  formValues[event.target.name] = event.target.value;
}

// Handle next step
function handleNextStep(event) {
  event.preventDefault();
  if (step === 1) {
    const { name, email, phone } = formValues;
    // TODO: Validate and process the data if needed
    step = 2;
  } else if (step === 2) {
    const { address, landmark, city, state, pincode } = formValues;
    // TODO: Validate and process the data if needed
    step = 3;
  }
  updateStepContent();
}

// Handle previous step
function handlePreviousStep() {
  if (step === 2) {
    step = 1;
  } else if (step === 3) {
    step = 2;
  }
  updateStepContent();
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const { paymentMethod, cardNumber, expiry, cvv } = formValues;
  // TODO: Submit form data to the server
}

// Update step content visibility
function updateStepContent() {
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");

  step1.style.display = step === 1 ? "block" : "none";
  step2.style.display = step === 2 ? "block" : "none";
  step3.style.display = step === 3 ? "block" : "none";
}

// Initial setup
function init() {
  updateStepContent();

  // Attach event listeners
  document.getElementById("step1-form").addEventListener("submit", handleNextStep);
  document.getElementById("step2-form").addEventListener("submit", handleNextStep);
  document.getElementById("step2-previous-btn").addEventListener("click", handlePreviousStep);
  document.getElementById("step3-form").addEventListener("submit", handleSubmit);
  document.getElementById("payment-method").addEventListener("change", handleFormChange);
}

init();
