(function() {
    var progressBar = document.querySelector('.progress-bar');
    document.querySelector('.js-change-option').addEventListener('click', function() {
        progressBar.style.setProperty('--percent', getRandomPercentage());
        progressBar.style.setProperty('--bar-color', getRandomColor());
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function getRandomPercentage() {
        return Math.floor(Math.random() * 100) + 1;
    }
}());
