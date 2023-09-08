function updateTime() {
    const currentTimeElement = document.getElementById("time");
    const now = new Date();

    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });
    const date = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3,
    });

    const currentTimeString = `${dayOfWeek}, ${date}<br>${time}`;
    currentTimeElement.innerHTML = currentTimeString;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);