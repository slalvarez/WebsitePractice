document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    var navLinks = document.querySelectorAll('.nav-link');

    // Add click event listener to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Prevent default behavior (i.e., page reload)
            event.preventDefault();
            
            // Get the target page URL from the data-target attribute
            var targetPage = this.getAttribute('data-target');

            // Slide out the current content
            document.querySelector('.content').style.animation = 'slide-out .5s forwards';

            // After a short delay, load the new page
            setTimeout(function () {
                window.location.href = targetPage;
            }, 500); // Adjust the delay to match the duration of the slide-out animation
        });
    });
});
// Different animations for page transitions

// Slide In from Left: Similar to the previous one, but the new page slides in from the left side of the screen.

// Fade In/Fade Out: The new page fades in while the current page fades out, creating a smooth transition effect.

// Zoom In/Zoom Out: The new page zooms in while the current page zooms out, giving the impression of depth.

// Flip: The new page flips in like a book page, while the current page flips out.

// Rotate: The new page rotates into view while the current page rotates out.

// Scale: The new page scales up while the current page scales down.

// Bounce: The new page bounces into view while the current page bounces out.

// Blur: The new page blurs into focus while the current page blurs out.

// Elastic: The new page stretches into view like an elastic band while the current page contracts.