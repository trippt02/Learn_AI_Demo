// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Active navigation link highlighting
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Placeholder for future global JS if needed
    console.log("Main JavaScript loaded. Current page: " + currentLocation);
});

// js/interactive-demos.js will contain specific demo logic
// For example, a function to simulate Copilot response:
/*
function simulateCopilot(prompt, outputElementId, predefinedResponses) {
    const outputElement = document.getElementById(outputElementId);
    let response = "AI: I'm thinking...";
    outputElement.textContent = response;

    setTimeout(() => {
        // Basic simulation: try to match keywords or return a default
        let matchedResponse = predefinedResponses.default || "AI: I couldn't generate a specific response for that prompt. Try being more specific.";
        for (const keyword in predefinedResponses) {
            if (prompt.toLowerCase().includes(keyword) && keyword !== 'default') {
                matchedResponse = predefinedResponses[keyword];
                break;
            }
        }
        outputElement.innerHTML = `<pre>${matchedResponse.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`; // Sanitize and format
    }, 1500);
}
*/
