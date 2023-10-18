// main.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('complaintForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const location = document.getElementById('location').value;
        const email = document.getElementById('email').value;
        const selectedIssue = getSelectedIssue();

        // Check if an issue is selected
        if (!selectedIssue) {
            alert('Please select an issue.');
            return;
        }

        // Store data in local storage
        localStorage.setItem('complaintData', JSON.stringify({
            location,
            issue: selectedIssue,
            email,
            timestamp: new Date().toISOString() // You can customize the timestamp format
        }));

        // Redirect to thanks.html
        window.location.href = "Details.html";
    });

    function getSelectedIssue() {
        // Get the selected issue from the radio buttons
        const radioButtons = document.querySelectorAll('input[name="issue"]');
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                return radioButton.value;
            }
        }
        return null; // Return null if no issue is selected
    }
});
