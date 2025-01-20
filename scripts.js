document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.clickable-image');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            var fullscreenDiv = document.createElement('div');
            fullscreenDiv.classList.add('fullscreen-img');

            var img = document.createElement('img');
            img.src = this.src;
            fullscreenDiv.appendChild(img);

            document.body.appendChild(fullscreenDiv);

            fullscreenDiv.addEventListener('click', function() {
                fullscreenDiv.remove();
            });
        });
    });

    // Відлічувальник часу
    var countdownTimer = document.getElementById('countdown-timer');
    var countdownDate = new Date('Jan 1, 2024 00:00:00').getTime();  // Замінити на реальну дату

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            countdownTimer.innerHTML = "Wydarzenie już się odbyło!";
        }
    }

    var x = setInterval(updateCountdown, 1000);
});
