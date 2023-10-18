document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('complaintData');

    if (storedData) {
        const complaintData = JSON.parse(storedData);

        // Use complaintData as needed
        const locationElement = document.getElementById('location');
        const issueElement = document.getElementById('issue');
        const emailElement = document.getElementById('email');

        // Example: Display the data in the HTML elements
        locationElement.textContent = `Location: ${complaintData.location}`;
        issueElement.textContent = `Issue: ${complaintData.issue}`;
        emailElement.textContent = `Email: ${complaintData.email}`;

        // Optionally, clear the data from local storage
        localStorage.removeItem('complaintData');
    }
});
