console.log("HELLO");
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container');
    const gravity = 0.9;
    const friction = 0.99;
    const velocity = Array.from(images).map(() => ({ x: 0, y: 0 }));

    function initializeImages() {
        images.forEach(image => {
            image.style.left = `${Math.random() * (window.innerWidth - image.clientWidth)}px`;
            image.style.top = `${Math.random() * (window.innerHeight - image.clientHeight)}px`;
        });
    }

    function animate() {
        images.forEach((image, index) => {
            let x = parseFloat(image.style.left);
            let y = parseFloat(image.style.top);

            // Update velocity based on gravity and friction
            velocity[index].x *= friction;
            velocity[index].y *= friction;
            velocity[index].y += gravity;

            // Update position
            x += velocity[index].x;
            y += velocity[index].y;

            // Handle boundaries
            if (x + image.clientWidth >= window.innerWidth || x <= 0) {
                velocity[index].x *= -1;
            }
            if (y + image.clientHeight >= window.innerHeight || y <= 0) {
                velocity[index].y *= -1;
            }

            image.style.left = `${x}px`;
            image.style.top = `${y}px`;
        });

        requestAnimationFrame(animate);
    }

    function handleDeviceMotion(event) {
        const acceleration = event.accelerationIncludingGravity;
        images.forEach((image, index) => {
            velocity[index].x += acceleration.x * 0.1;
            velocity[index].y += acceleration.y * 0.1;
        });
    }

    function handleMouseMove(event) {
       
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = (event.clientY / window.innerHeight) * 2 - 1;

        images.forEach((image, index) => {
            velocity[index].x += x * 0.5;
            velocity[index].y += y * 0.5;
        });
    }

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', handleDeviceMotion);
    } else {
        window.addEventListener('mousemove', handleMouseMove);
    }

    initializeImages();
    animate();
});
