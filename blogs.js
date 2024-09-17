import info from './info.js';

document.addEventListener('DOMContentLoaded', function () {
    const blogBody = document.querySelector('.blogBody');
    let htmlContent = '';

    // Generate the blog content
    info.forEach((item, index) => {
        htmlContent += `
            <div id="blog_border">
                <h3>${item.question}</h3>
                <p id="opinion-${index}">
                    ${item.opinion.slice(0, 50)}
                    <a href="#" class="show-more" data-index="${index}">More...</a>
                </p>
            </div>
        `;
    });

    blogBody.innerHTML = info.length === 0 ? "<h2>Uploads soon</h2>" : htmlContent;

    // Add event listeners to all "More..." links
    const showMoreLinks = document.querySelectorAll('.show-more');
    showMoreLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor behavior
            const index = this.getAttribute('data-index'); // Get the index from data attribute
            localStorage.setItem("storedIndex", index); // Store the index
            window.location = "show_blog.html"; // Redirect to the show_blog page
        });
    });
});
