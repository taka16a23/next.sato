export function focusInput(a_sName) {
  // document exists only browser
  if (process.browser) {
    var arrInputs = document.querySelectorAll('input[name="' + a_sName + '"]');
    if(arrInputs) {
      arrInputs[arrInputs.length -1].focus();
    };
  }
}
