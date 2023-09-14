// main.js

// Function to change the background color
function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ffff33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Track the button click event in Google Analytics
    gtag('event', 'basic_button_click', {
        'event_category': 'Color Change',
        'event_label': 'Background Color Changed'
    });

    // Track the button click event in Google Analytics with additional parameters
    gtag('event', 'enrich_button_click', {
    'event_category': 'Enrich Color Change', // Category of the event
    'event_label': 'Enrich Background Color Changed', // Label for the event
    'value': 1, // Numeric value associated with the event (optional)
    'currency': 'USD', // Currency for the value (optional)
    'event_action': 'click', // Action associated with the event (optional)
    'event_callback': function() {
        // Callback function to execute after the event is tracked (optional)
        console.log('Button click event tracked successfully.');
    },
    'event_transport': 'beacon' // Specify the transport method (optional)
});
}

// Add an event listener to the button
const button = document.getElementById("color-button");
button.addEventListener("click", changeBackgroundColor);
