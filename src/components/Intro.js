import React from 'react'
import Particles from "react-tsparticles";


const Intro = () => {
    return (
        <div class="snap-start h-section flex bg-black" id="intro">
            <div class="pt-8 w-1/2 font-bold">
                <p class="text-white ml-10 text-3xl line line-1-animation"> I am a front-end 
                <span class="text-red-500"> developer.</span>  
                </p>
                <p class="text-white ml-10 mt-10 line line-2-animation">I am a 
                <span class="text-red-500"> researcher.</span>
                </p>
                <p class="text-white ml-10 mt-10 line line-3-animation">I am a 
                <span class="text-red-500"> musician.</span>
                </p>
               
             </div>
             <div class="w-1/2">
                 <div class="ml-10 mt-56">
                    <h1 class="text-3xl font-bold text-white mb-4">Hi There, I'm</h1>
                    <h2 class="text-6xl font-bold text-white mb-4">Daniel Xiao</h2>
                </div>
             </div>
             <div class="h-section" >
             <Particles
                options={{
                    "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                        "enable": true,
                        "value_area": 700
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                        "width": 0,
                        "color": "#000000"
                        },
                        "polygon": {
                        "nb_sides": 5
                        },
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                        "enable": false,
                        "speed": 0.1,
                        "opacity_min": 0.1,
                        "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                        "enable": false,
                        "speed": 10,
                        "size_min": 0.1,
                        "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#E0DDDD",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                        }
                    }
                    },
                    "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                        "enable": true,
                        "mode": "grab"
                        },
                        "onclick": {
                        "enable": true,
                        "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                        },
                        "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                        },
                        "repulse": {
                        "distance": 200,
                        "duration": 0.4
                        },
                        "push": {
                        "particles_nb": 4
                        },
                        "remove": {
                        "particles_nb": 2
                        }
                    }
                    },
                    "retina_detect": true,
    
                }}
      />
      </div>
        </div>
    )
}

export default Intro
