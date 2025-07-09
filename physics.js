const planets = [
    { class: '.mercury', radiusX: 70, radiusY: 50, speed: 0.020, size: 5 },
    { class: '.venus', radiusX: 90, radiusY: 65, speed: 0.015, size: 8 },
    { class: '.earth', radiusX: 115, radiusY: 90, speed: 0.010, size: 12 },
    { class: '.mars', radiusX: 140, radiusY: 115, speed: 0.0095, size: 12 },
    { class: '.jupiter', radiusX: 225, radiusY: 175, speed: 0.0038, size: 33 },
    { class: '.saturn', radiusX: 290, radiusY: 225, speed: 0.0030, size: 30 },
    { class: '.uranus', radiusX: 350, radiusY: 275, speed: 0.0025, size: 20 },
    { class: '.neptune', radiusX: 400, radiusY: 300, speed: 0.0022, size: 20 }
];

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

function PlanetMotion(element, radiusX, radiusY, speed, size) {
    let angle = 0; // local to each planet
    function animate() {
        const x = centerX + radiusX * Math.cos(angle) - size / 2;
        const y = centerY + radiusY * Math.sin(angle) - size / 2;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        angle += speed;
        requestAnimationFrame(animate);
    }
    animate();
}

planets.forEach((planet) => {
    const element = document.querySelector(planet.class);
    if (element) {
        PlanetMotion(element, planet.radiusX, planet.radiusY, planet.speed, planet.size);
    }
});