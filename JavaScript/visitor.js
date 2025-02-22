document.addEventListener("DOMContentLoaded", function () {
    let viewCount = localStorage.getItem('viewCount');
    viewCount = viewCount ? parseInt(viewCount) : 0;

    viewCount++;

    localStorage.setItem('viewCount', viewCount);

    let viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
        viewCountElement.innerText = viewCount;
    } else {
        console.error("Không tìm thấy phần tử có id='viewCount'");
    }
});
