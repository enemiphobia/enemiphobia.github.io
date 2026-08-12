const date = new Date();
const lastModified = new Date(document.lastModified);
const month = date.toLocaleString('default', { month: 'long' });
const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
 });

// goal: August 1, 2026 at 2:03 AM
if (document.getElementById("current-date")) {
document.getElementById("current-date").innerHTML = month
 + " " + date.getDate() + ", " + date.getFullYear()
 + " at " + time;
}

 document.getElementById("last-modified").innerHTML = "Site Last Modified: " + lastModified.toLocaleString('default', { month: 'long' })
 + " " + lastModified.getDate() + ", " + lastModified.getFullYear()
 + " at " + lastModified.toLocaleTimeString('en-US', {hour: 'numeric',minute: '2-digit',hour12: true});

function formatJekyllDate() {
    const dateElement = document.getElementById('last-modified');
  
    if (!dateElement) return;

    const rawDateString = dateElement.textContent.trim();
    console.log(rawDateString);

    const dateObj = new Date(rawDateString);

    if (isNaN(dateObj.getTime())) {
        console.warn("Invalid date format received from Jekyll:", rawDateString);
        return;
    }

    // custom layout categorized as Date at Time
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const formattedTime = dateObj.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    dateElement.innerHTML = `${formattedDate} at ${formattedTime}`;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', formatJekyllDate);
} else {
    formatJekyllDate();
}
