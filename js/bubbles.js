
bubbly({
    canvas : document.getElementById('demo'),
    animate : true,
    blur: 1,
    bubbles: 100,

    colorStart: "#4c0e99", 

    colorStop: "#17B",

    compose: "lighter", 
  
    shadowColor: "#fff",

    angleFunc: () => Math.random() * Math.PI * 2, // default is this
  
    velocityFunc: () => 0.1 + Math.random() * 0.5, // default is this
    
    radiusFunc: () => 4 + Math.random() * 25 // default is 4 + Math.random() * width / 25

})

