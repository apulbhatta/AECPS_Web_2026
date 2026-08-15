const enquiryForm = document.getElementById('enquiry-form');
const formStatus = document.getElementById('form-status');

function enquiryMessage() {
  const data = new FormData(enquiryForm);
  return [
    'New Project Enquiry',
    '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Email: ${data.get('email') || 'Not provided'}`,
    `Service: ${data.get('service')}`,
    `Project location: ${data.get('location') || 'Not provided'}`,
    `Preferred response: ${data.get('preferred')}`,
    '',
    'Project details:',
    data.get('message')
  ].join('\n');
}

function validateEnquiry() {
  if (enquiryForm.reportValidity()) {
    formStatus.textContent = '';
    return true;
  }
  formStatus.textContent = 'Please complete all required fields before continuing.';
  return false;
}

document.querySelector('[data-action="email"]').addEventListener('click', () => {
  if (!validateEnquiry()) return;
  const subject = encodeURIComponent('Project Enquiry — Apul Engineering Consultancy');
  window.location.href = `mailto:info@apulengineeringconsultancy.site?subject=${subject}&body=${encodeURIComponent(enquiryMessage())}`;
});

document.querySelector('[data-action="whatsapp"]').addEventListener('click', () => {
  if (!validateEnquiry()) return;
  window.open(`https://wa.me/9779806417978?text=${encodeURIComponent(enquiryMessage())}`, '_blank', 'noopener,noreferrer');
});
