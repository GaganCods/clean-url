document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to load content based on the page
    function loadPage(page) {
        let content = '';
        let url = '';
        switch(page) {
            case 'home':
                content = '<h1>Welcome to Home Page!</h1>';
                url = 'index.html';  // Home page file
                break;
            case 'about':
                content = '<h1>About Us</h1><p>We are a tech company.</p>';
                url = 'about.html';  // About page file
                break;
            case 'contact':
                content = '<h1>Contact Us</h1><p>Feel free to reach out.</p>';
                url = 'contact.html';  // Contact page file
                break;
            default:
                content = '<h1>404 Page Not Found</h1>';
                url = '404.html';  // Optional error page
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
