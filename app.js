document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to load content based on the page
    function loadPage(page) {
        let content = '';
        let url = '';
        switch(page) {
            case 'home':
                content = '<h1>Welcome to Home Page</h1><p>This is the home page. Enjoy your stay!</p>';
                url = '/index.html';  // Home page file
                break;
            case 'about':
                content = '<h1>About Us</h1><p>We are a team of passionate individuals creating amazing web experiences.</p>';
                url = '/about.html';  // About page file
                break;
            case 'contact':
                content = '<h1>Contact Us</h1><p>Feel free to reach out to us!</p><form action="#" method="post"><input type="text" name="name" placeholder="Your Name" required><input type="email" name="email" placeholder="Your Email" required><textarea name="message" placeholder="Your Message" required></textarea><button type="submit">Send Message</button></form>';
                url = '/contact.html';  // Contact page file
                break;
            default:
                content = '<h1>404 Page Not Found</h1>';
                url = '/404.html';  // Optional error page
        }
        contentDiv.innerHTML = content;
        window.history.pushState({page: page}, page, url);  // Change the URL
    }

    // Handle navigation click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage(link.dataset.page);  // Load page content
        });
    });

    // Handle page load based on URL
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    loadPage(currentPage);
});
