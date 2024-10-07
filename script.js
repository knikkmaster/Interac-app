function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Hide login screen and show app content after successful login
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';
}

// Event listener for the Login button
document.getElementById('loginButton').addEventListener('click', function() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com'
        }).then(function(auth2) {
            auth2.signIn().then(onSignIn);
        });
    });
});

// Button event listener for opening the link
document.getElementById('openLinkButton').addEventListener('click', function() {
    const link = 'https://docs.google.com/forms/d/e/1FAIpQLSdlHG0hKNJb1nt4A1OemUE4yuVVHElbl_qI1I2dKtgIWlMhPg/viewform'; // Change this to your desired link
    window.open(link, '_blank');
});
