const counter = document.querySelector("#counter-number");  // Select by id using #
async function updateCounter() {
    let response = await fetch("https://nfkbj7pjw3carxnzvp5h6ieqgu0svjlg.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;  // Use backticks for template literal
}

updateCounter();
