  const texts = [
            "It is not a pursuit of truth, but alleviation of suffering.",
            "Our choices, build our purpose just as they build our life.",
            "The struggle of existence, turned a struggle of knowledge.",
            "In the justness of knowledge lives the injustice of choice.",
            "Acceptance of our humanity and fallibility, and subjugation by the order of things we understand ourselves.",
            "We lose ourselves to meaning dictated by forces we only hold faith for.",
            "We lose ourselves to being given purpose rather than finding it.",
            "We lie still, in wait for it, such as objects lie in wait of being used.",
            "So, what will you do now? Lose to the facade of the light, or be your own?",
           
        ];

        let index = 0;

        document.getElementById('text-box').addEventListener('click', function() {
            index = (index + 1) % texts.length;
            this.innerText = texts[index];
        });

