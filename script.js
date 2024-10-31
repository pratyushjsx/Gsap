var tl = gsap.timeline();
// tl.from("nav h1",{
//     y:-20,
//     opacity:0,
//     delay:0.5,
//     duration:1,
// })
// tl.from(".side ul li",{
//     y:-10,
//     opacity:0,
//     stagger:1
// })
tl.from(".main h1",{
    y:-20,
    delay:1,
    opacity:0,
    duration:2,
    scale:1.9,
    repeat:-1,
    yoyo:true,
})