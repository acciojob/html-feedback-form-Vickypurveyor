//your code here
function validateNameWords() {
      const nameInput = document.getElementById('name');
      const errorDisplay = document.getElementById('nameError');
      const words = nameInput.value.trim().split(/\s+/);
      const wordCount = words.filter(word => word.length > 0).length;

      if (wordCount < 3 || wordCount > 50) {
        errorDisplay.textContent = 'Name must be between 3 and 50 words.';
        return false; // prevent form submission
      }

      errorDisplay.textContent = ''; // clear error
      return true;
}