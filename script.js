// Show Date
function showDate() {
    let today = new Date();
    let date = today.toLocaleDateString();
    let d = document.getElementById("date");
    if (d) {
        d.innerHTML = "📅 Date : " + date;
    }
}

// Show Live Time
function showTime() {
    let t = document.getElementById("time");
    if (t) {
        setInterval(function () {
            t.innerHTML = "🕒 Time : " + new Date().toLocaleTimeString();
        }, 1000);
    }
}

// Save Diary
function saveDiary() {
    let today = new Date().toLocaleDateString();
    let text = document.getElementById("diary").value;

    localStorage.setItem(today, text);

    document.getElementById("msg").innerHTML =
    "✅ Diary Saved Successfully!";
}

// Load Diary
function loadDiary() {
    let today = new Date().toLocaleDateString();

    document.getElementById("diary").value =
    localStorage.getItem(today) || "";
}

window.onload = function () {
    showDate();
    showTime();
    loadDiary();
}
