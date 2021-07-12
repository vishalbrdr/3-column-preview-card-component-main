const animation = gsap.timeline({defaults: {duration: 1}})

animation
    .from(".card", { x: "-50vw", opacity: 0, ease: "bounce", stagger: -0.5})
    .from(".card-logo", { x: "-50vw",opacity: 0, ease: "elastic" })
    .from(".card-name, .card-description, .card-btn", { opacity: 0, duration: .5, stagger: 0.1, ease: "bounce"})
    .from(".attribution", {opacity: 0,y: "50px", ease: "elastic" })


