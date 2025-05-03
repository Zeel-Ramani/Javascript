
// setInterval(() => {
//     document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
// }, 1000);


// cuntdown timer

let time = 10;

setInterval(() => {
  if (time > 0) {
    time--;
    document.getElementById("timer").innerText = time;
  }else {
    document.getElementById("timer").innerText = "Time's up";
  }
}, 1000);


// bithday cundown timer  simple code


// let birthday = ''; // August 15

// function getNextBirthdayDate() {
//   let now = new Date();
//   let thisYearBirthday = new Date(`${now.getFullYear()}-${birthday}T00:00:00`);
//   if (thisYearBirthday < now) {
//     thisYearBirthday = new Date(`${now.getFullYear() + 1}-${birthday}T00:00:00`);
//   }
//   return thisYearBirthday;
// }

// function updateCountdown() {
//   let now = new Date();
//   let nextBirthday = getNextBirthdayDate();
//   let timeDiff = nextBirthday - now;

//   let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
//   let minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
//   let seconds = Math.floor((timeDiff / 1000) % 60);

//   document.getElementById("countdown").textContent =
//     `${days}d ${hours}h ${minutes}m ${seconds}s`;
// }

// setInterval(updateCountdown, 1000);
// updateCountdown();