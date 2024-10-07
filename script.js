function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Show the link button after successful login
    document.getElementById('openLinkButton').style.display = 'block';

    // You can also save user info in localStorage if needed
    localStorage.setItem('userName', profile.getName());
}

document.getElementById('openLinkButton').addEventListener('click', function() {
    const link = 'https://docs.google.com/forms/d/e/1FAIpQLSdlHG0hKNJb1nt4A1OemUE4yuVVHElbl_qI1I2dKtgIWlMhPg/viewform'; // Change this to your desired link
    window.open(link, '_blank');
});
