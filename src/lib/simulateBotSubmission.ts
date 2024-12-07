export function simulateBotSubmission(formId: string) {
  const form = document.getElementById(formId);

  if (!form) {
    console.error(`Form with id "${formId}" not found.`);
    return;
  }

  fillInputs(form, "text", "Lorem ipsum");
  fillInputs(form, "email", "bot@example.com");
  fillInputs(form, "tel", "123456789");
  clickSubmitButton(form);
}

function fillInputs(form: HTMLElement, type: string, value: string) {
  const inputs = form.querySelectorAll(
    `input[type="${type}"]`,
  ) as NodeListOf<HTMLInputElement>;

  inputs.forEach((input) => {
    input.value = value;
  });
}

function clickSubmitButton(form: HTMLElement) {
  const button = form.querySelector(
    'button[type="submit"]',
  ) as HTMLButtonElement;

  button.click();
}
