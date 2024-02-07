const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const element = document.getElementById("result");

const cleanUp = () => {
  const cleanedInput = input.value.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleanedInput;
};

const checkPalindrome = (checkInput) => {
  if (checkInput === checkInput.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

const displayResult = () => {
  if (input.value !== "") {
    if (checkPalindrome(cleanUp())) {
      element.textContent = `${input.value} is a palindrome`;
    } else {
      element.textContent = `${input.value} is not a palindrome`;
    }
  } else {
    alert("Please input a value");
  }
};

checkButton.addEventListener("click", displayResult);
