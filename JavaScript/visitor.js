let viewCount = localStorage.getItem('viewCount');

if (!viewCount) {
    viewCount = 0;
}

viewCount++;

localStorage.setItem('viewCount', viewCount);

document.getElementById('viewCount').innerText = viewCount;