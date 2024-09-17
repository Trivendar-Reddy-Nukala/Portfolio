import info from './info.js';

document.addEventListener('DOMContentLoaded', function () {
    const blogBody = document.querySelector('.blogBody');
    const storedIndex = localStorage.getItem("storedIndex");

    if (storedIndex !== null && info[storedIndex]) {
        const selectedPost = info[storedIndex];
        let htmlContent = `
            <div id="blog_border">
                <h3>${selectedPost.question}</h3>
                <p id="opinion-${storedIndex}">
                    ${selectedPost.opinion}
                </p>
            </div>
        `;
        blogBody.innerHTML = htmlContent;
    } else {
        blogBody.innerHTML = "<h2>Post not found!</h2>";
    }
});
