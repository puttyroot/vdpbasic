// কত সেকেন্ড পরে রিডাইরেক্ট হবে
let seconds = 10;
const targetUrl = "https://ansarandvdpprahladpur.github.io/";

const msg = document.getElementById("redirect-msg");
const countdownDiv = document.getElementById("countdown");

// কাউন্টডাউন শুরু
const countdown = setInterval(() => {
  msg.textContent = `আপনি ${seconds} সেকেন্ডের মধ্যে স্বয়ংক্রিয়ভাবে আবেদন ফরমে চলে যাবেন...`;
  countdownDiv.textContent = seconds; // বড় সংখ্যা দেখাবে
  seconds--;

  if (seconds < 0) {
    clearInterval(countdown);
    window.location.href = targetUrl;
  }
}, 1000);
