import info from './info.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log(info);
    const blogBody = document.querySelector('.blogBody');
    let htmlContent = '';

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

    // Function to handle "More..." and "Show less" toggling
    function toggleOpinion(event) {
        event.preventDefault();
        const index = event.target.getAttribute('data-index');
        const opinionElement = document.getElementById(`opinion-${index}`);
        const fullOpinion = info[index].opinion;

        if (event.target.classList.contains('show-more')) {
            // Show full opinion and switch to "Show less"
            opinionElement.innerHTML = `
                ${fullOpinion}
                <a href="#" class="show-less" data-index="${index}">Show less</a>
            `;
        } else {
            // Show truncated opinion and switch back to "More..."
            opinionElement.innerHTML = `
                ${fullOpinion.slice(0, 50)}
                <a href="#" class="show-more" data-index="${index}">More...</a>
            `;
        }

        // Re-attach event listener to the newly created "More..." or "Show less" link
        opinionElement.querySelector('a').addEventListener('click', toggleOpinion);
    }

    // Attach the event listener for all initial "More..." links
    document.querySelectorAll('.show-more').forEach(link => {
        link.addEventListener('click', toggleOpinion);
    });
});
