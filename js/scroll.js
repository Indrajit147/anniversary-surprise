const scenes = document.querySelectorAll('.scene');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    },
    {
        threshold: 0.4
    }
);

scenes.forEach(scene => {
    observer.observe(scene);
});
