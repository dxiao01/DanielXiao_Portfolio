import React, {useState} from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "./images/DarkSpot.jpeg";
import image2 from "./images/Mavencode.jpg";
import image3 from "./images/Daniel.jpeg";
import image4 from "./images/VEGS.jpg";

const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4}
]


const captions = [
    "HackTAMS 2021",
    "MavenCode Internship",
    "TMTA State",
    "Virtual Environment Grocery Store Research"
]



const Portfolio = () => {
    const [index, setIndex] = useState(0);
    return (
        
        <div class="flex items-center justify-center h-section bg-white flex-col">
            <div class="text-3xl mb-6">
                    {captions[index]}
            </div>
            <div class="mr-4">
                <SimpleImageSlider
                        width={900}
                        height={500}
                        images={images}
                        showNavs={true}
                        useGPURender = {true}
                        onClickNav = {(toRight) => {
                            if(toRight && index == 3)
                            {
                                setIndex(0);
                            }
                            if(toRight && index != 3)
                            {
                                setIndex(index+1);
                            }
                            if(!toRight && index == 0)
                            {
                                setIndex(3);
                            }
                            if(!toRight && index != 0)
                            {
                                setIndex(index-1);
                            }
                        }}
                />
            </div>
        </div>
    )
}

export default Portfolio
