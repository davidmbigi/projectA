// Countdown timer
const countdownTimer = () => {
    const countdownDate = new Date("2024-12-31T23:59:59").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  };
  
  setInterval(countdownTimer, 1000);
  
  // Automated statistics section
  const stats = [
    { label: "Total Bookings", value: 1000 },
    { label: "Total Guests", value: 5000 },
    { label: "Average Rating", value: 4.5 },
  ];
  
  const statsCard = document.getElementById("stats-card");
  stats.forEach((stat) => {
    const statHTML = `
      <h2>${stat.label}</h2>
      <p>${stat.value}</p>
    `;
    statsCard.innerHTML += statHTML;
  });