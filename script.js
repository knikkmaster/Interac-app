// Function to handle Google OAuth response
function handleCredentialResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);

    // Optionally, decode the JWT token to access user information
    const userObject = parseJwt(response.credential);
    console.log(userObject);

    // Store the token in localStorage to keep the user logged in
    localStorage.setItem('googleToken', response.credential);

    // Show the button to open the link
    document.getElementById('openLinkButton').style.display = 'inline-block';
}

// Helper function to decode JWT (optional for debugging purposes)
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

// Function to open the link if the user is logged in
document.getElementById('openLinkButton').addEventListener('click', function() {
    const googleToken = localStorage.getItem('googleToken');
    
    if (googleToken) {
        // Open the desired link if the user is authenticated
        const link = 'https://docs.google.com/forms/d/e/1FAIpQLSdlHG0hKNJb1nt4A1OemUE4yuVVHElbl_qI1I2dKtgIWlMhPg/viewform';
        window.open(link, '_blank');
    } else {
        alert('You must log in to access this link.');
    }
});
