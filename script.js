function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com'
        }).then(function(auth2) {
            // Attach the click handler to your login button
            document.getElementById('googleLoginButton').addEventListener('click', function() {
                auth2.signIn().then(onSignIn).catch(function(error) {
                    console.error('Login failed: ', error);
                });
            });
        });
    });
}

function onSignIn(googleUser) {
    // Proceed with user data handling
    const profile = googleUser.getBasicProfile();
    console.log('User signed in: ' + profile.getName());

    // Show your app content
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'block';
}

// Logout function
function logout() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        document.getElementById('appContent').style.display = 'none';
        document.getElementById('loginScreen').style.display = 'block';
        document.getElementById('logoutButton').style.display = 'none';
    });
}
