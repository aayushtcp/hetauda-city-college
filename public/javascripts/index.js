document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typewriter-text');
    const texts = ["College", "Memoroes", "Stories"];
    let speed = 80; // Adjust the typing speed (milliseconds)
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            textElement.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            // Pause before starting to erase
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, speed);
        } else {
            // Move to the next text or start over
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); // Start the typing animation
});
