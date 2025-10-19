function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString();
    document.getElementById('current-time').textContent = 
        `Current time: ${timeString}`;
}

// Update time immediately and every second
updateTime();
setInterval(updateTime, 1000);
