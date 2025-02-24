function submitFeedback() {
    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let description = document.getElementById('description').value;
    let feedbackSection = document.getElementById('feedbackSection');
    
    if (name && subject && description) {
        let feedbackBox = document.createElement('div');
        feedbackBox.classList.add('feedback-box');
        let timestamp = new Date().toLocaleTimeString();
        feedbackBox.innerHTML = `<h3>${name} (${subject})</h3><p>${description}</p><p class='timestamp'>${timestamp}</p>`;
        feedbackSection.appendChild(feedbackBox);
        
        document.getElementById('name').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill in all fields');
    }
}