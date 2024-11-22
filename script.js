document.getElementById('connect-button').addEventListener('click', function() {
    const socialLinks = document.getElementById('social-links');
    
    // Toggle the display of social links
    if (socialLinks.style.display === 'none' || socialLinks.style.display === '') {
        socialLinks.style.display = 'block';
    } else {
        socialLinks.style.display = 'none';
    }
});
