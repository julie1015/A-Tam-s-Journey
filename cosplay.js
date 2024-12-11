document.addEventListener('DOMContentLoaded', function() {
    // Check if the cosplay section has any content (e.g., text or images)
    const cosplaySections = document.querySelectorAll('.cosplay-section');
    cosplaySections.forEach(function(section) {
        const textContent = section.querySelector('p');
        if (!textContent || textContent.textContent.trim() === '') {
            textContent.style.display = 'none'; // Hide the text if no content
        }
    });

    // Check if the gallery items have any content
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item) {
        const textContent = item.querySelector('p');
        if (!textContent || textContent.textContent.trim() === '') {
            textContent.style.display = 'none'; // Hide the text if no content
        }
    });
});
