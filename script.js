document.getElementById('search').addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const videos = document.querySelectorAll('.video-container');

    videos.forEach(video => {
        const title = video.querySelector('h2').textContent.toLowerCase();
        const description = video.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            video.style.display = '';
        } else {
            video.style.display = 'none';
        }
    });
});

// Prevent right-click context menu on videos
const videoElements = document.querySelectorAll('video');
videoElements.forEach(video => {
    video.addEventListener('contextmenu', event => {
        event.preventDefault();
    });
});
