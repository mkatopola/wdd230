document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('close-banner');

    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6

    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) { // Monday - 1, Tuesday - 2, Wednesday - 3
        banner.classList.remove('hidden');
    }

    closeBannerButton.addEventListener('click', function () {
        banner.classList.add('hidden');
    });
});
