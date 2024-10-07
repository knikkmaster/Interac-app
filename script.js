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

// Button event listener for opening the link
document.getElementById('openLinkButton').addEventListener('click', function() {
    const link = 'https://example.com'; // Change this to your desired link
    window.open(link, '_blank');
});
