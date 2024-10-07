document.getElementById('googleLoginButton').addEventListener('click', function() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(onSignIn);
});

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Hide login screen and show app content after successful login
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';

    // Display the logout button
    document.getElementById('logoutButton').style.display = 'block';
}

// Button event listener for logging out
document.getElementById('logoutButton').addEventListener('click', logout);

// Button event listener for opening the first link
document.getElementById('openLinkButton').addEventListener('click', function() {
    const link = 'https://docs.google.com/forms/d/e/1FAIpQLSdlHG0hKNJb1nt4A1OemUE4yuVVHElbl_qI1I2dKtgIWlMhPg/viewform'; // Change this to your desired link
    window.open(link, '_blank');
});

// Button event listener for opening another link
document.getElementById('anotherLinkButton').addEventListener('click', function() {
    const anotherLink = 'https://sites.google.com/interacmail.com/newhub/contact-and-locations'; // Change this to your desired link
    window.open(anotherLink, '_blank');
});

// Logout function
function logout() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');

        // Hide app content and show login screen after logout
        document.getElementById('appContent').style.display = 'none';
        document.getElementById('loginScreen').style.display = 'block';

        // Hide the logout button
        document.getElementById('logoutButton').style.display = 'none';
    });
}
