document.getElementById("analyzeBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value.trim();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // clear previous results

  if (text === "") {
    resultsDiv.innerHTML = "<p class='result-item' style='color:red;'>Please enter some text to analyze.</p>";
    return;
  }

  // Character count
  const charCount = text.length;

  // Word count (handle multiple spaces)
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Reverse text
  const reversedText = text.split("").reverse().join("");

  // Display results
  resultsDiv.innerHTML = `
    <p class="result-item"><strong>Total Characters:</strong> ${charCount}</p>
    <p class="result-item"><strong>Total Words:</strong> ${wordCount}</p>
    <p class="result-item"><strong>Reversed Text:</strong> ${reversedText}</p>
  `;
});