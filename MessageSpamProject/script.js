const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

  /*
    Regex pattern
    Syntax: // - pattern scope
            |  - add new pattern (condition or)
    ---------------------------------------------------
    Flags: i  -> ignore case
           g  -> global (find all matches in the text)
           m  -> multiline (treat each line as a separate string)
           s  -> allows '.' to match any character, including line breaks
           u  -> unicode (use Unicode properties)
           y  -> sticky (matches starting at the specified position)
*/

const helpRegex = /please help|assist me/i;


const denyList = [helpRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
    
