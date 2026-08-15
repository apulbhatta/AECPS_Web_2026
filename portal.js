const loginForm = document.getElementById('portal-login');
const portalMessage = document.getElementById('portal-message');
const password = document.getElementById('portal-password');
const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', () => {
  const showing = password.type === 'text';
  password.type = showing ? 'password' : 'text';
  togglePassword.textContent = showing ? 'Show' : 'Hide';
  togglePassword.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
});

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;
  portalMessage.textContent = 'Client ID or password did not match our records. If you entered the correct details and are still experiencing an issue, contact AECPS for further assistance.';
  password.value = '';
  password.type = 'password';
  togglePassword.textContent = 'Show';
});

const policyDialog = document.getElementById('portal-dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogCopy = document.getElementById('dialog-copy');

function showPolicy(title, copy) {
  dialogTitle.textContent = title;
  dialogCopy.textContent = copy;
  policyDialog.showModal();
}

document.getElementById('forgot-password').addEventListener('click', () => showPolicy(
  'Password reset assistance',
  'Under AECPS policy, account credentials and client data cannot be created, reset, manipulated, or edited through the online client portal. Password resets and data changes can only be completed by the AECPS Technical (IT) Team after client verification. Contact us now for assistance.'
));

document.getElementById('create-account').addEventListener('click', () => showPolicy(
  'Client account creation',
  'Client profiles cannot be created online. Once an engagement is confirmed and project work begins, the AECPS Technical (IT) Team will issue the authorized client a Client ID and provide onboarding and further access assistance.'
));

document.querySelector('.dialog-close').addEventListener('click', () => policyDialog.close());
policyDialog.addEventListener('click', event => {
  if (event.target === policyDialog) policyDialog.close();
});
