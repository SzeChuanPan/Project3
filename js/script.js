// TOOL 1: Toggle Skills Section (on skills.html)
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skillsSection");
  if (skillsSection) {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Skills";
    toggleBtn.style.margin = "10px";
    toggleBtn.style.padding = "10px";
    skillsSection.parentNode.insertBefore(toggleBtn, skillsSection);
    toggleBtn.addEventListener("click", () => {
      skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
    });
  }

  // TOOL 2: Welcome Alert (on index.html)
  if (document.title === "Welcome") {
    alert("Welcome to Peter Kim’s website!");
  }

  // TOOL 3: Load Google Map (on map.html)
  if (document.getElementById("map")) {
    const gmapScript = document.createElement("script");
    gmapScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0-JoEuD2VOauot1J8CwEPSvvQ9cmDizI&callback=initMap";
    gmapScript.async = true;
    gmapScript.defer = true;
    document.body.appendChild(gmapScript);
  }
});

// GLOBAL Google Maps Init Function
function initMap() {
  const location = { lat: 41.8349, lng: -87.6270 }; // IIT Bronzeville Campus

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "IIT Bronzeville Campus",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>IIT Main Campus</h3><p>Located in Bronzeville, Chicago.</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}
