const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

// check if text-input has a value
// we define textInputValue inside the function to fetch the value of the input at the time we click the button, if we define outside of the function it may affect the behavior as we will get the value of textInput from the initial page load
const requiredValue = () => {
  const textInputValue = document.getElementById("text-input").value;
  if (textInputValue.length < 1) {
    alert("Please input a value");
  }
};

const checkStr = (
  textInputValue = document.getElementById("text-input").value
) => {
  const unmodifiedValue = (textInputValue =
    document.getElementById("text-input").value);
  const textInputValueLowerCase = textInputValue.toLowerCase();
  textInputValue = textInputValueLowerCase.replace(
    /[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g,
    ""
  );
  const inputCharacters = Array.from(textInputValue);
  console.log(inputCharacters);
  // copy of inputCharacters reversed, created new copy to not mutate original
  const reversedInputCharacters = Array.from(inputCharacters).reverse();
  console.log(reversedInputCharacters);
  let counter = 0;
  const isPalindrome = `${unmodifiedValue} is a palindrome.`;
  const isNotPalindrome = `${unmodifiedValue} is not a palindrome.`;
  // loop through arrays, comparing regular input to a reversed input, for each matching character we increase our counter
  inputCharacters.forEach((character, i) => {
    if (character == reversedInputCharacters[i]) {
      counter += 1;
    }
  });
  // if out our counter matches the length of the array we have a palindrome
  if (counter == inputCharacters.length && counter > 0) {
    result.innerText = isPalindrome;
  } else if (counter < inputCharacters.length) {
    result.innerText = isNotPalindrome;
  }
};

checkButton.addEventListener("click", () => {
  requiredValue();
  checkStr();
});
