const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  if (!textInput.value || textInput.value === "") {
    alert("Please input a value");
  }
  const str = textInput.value;
  const resultString = isPalindrome(str)
    ? `<span>${str}</span> is a palindrome`
    : `<span>${str}</span> is not a palindrome`;

  displayResult(resultString);
});

const isPalindrome = (str) => {
  const result = str.toLowerCase().replace(/[" ",._:\/()-]/g, "");
  return result === result.split("").reverse().join("");
};

const displayResult = (str) => {
  result.style.display = "block";
  result.innerHTML = str;
};
