import React, {useEffect, useState} from 'react'

const Portfolio = () => {


    const bgColor = {
        default: 'bg-white',
        'active': 'bg-topbar'
    }

    return (
        <div class="h-section snap-start flex flex-col items-center w-full" id="portfolio">
            <h1 class="text-6xl font-semibold pt-6">Portfolio</h1>
            <div class=" mx-2.5 my-7 flex text-sm">
                <button class={`mr-10 hover:${bgColor['active']} 
                        hover:text-white p-2 font-semibold rounded-full text-xl 
                        transition-all ease-linear duration-300 shadow-lg`}>HackTAMS 2021</button>
                <button class={`mr-10 hover:${bgColor['active']} 
                        hover:text-white p-2 font-semibold rounded-full text-xl 
                        transition-all ease-linear duration-300 shadow-lg`}>MavenCode Internship</button>
                <button class={`mr-10 hover:${bgColor['active']} 
                        hover:text-white p-2 font-semibold rounded-full text-xl 
                        transition-all ease-linear duration-300 shadow-lg`}>TMSCA State</button>
                <button class={`mr-10 hover:${bgColor['active']} 
                        hover:text-white p-2 font-semibold rounded-full text-xl 
                        transition-all ease-linear duration-300 shadow-lg`}>VEGS Research</button>
            </div>
            <div class="flex items-center flex-col">
                <div class="">
                    <img 
                    src={process.env.PUBLIC_URL + '/DarkSpot.jpeg'}
                    alt="DarkSpot"
                    class="h-96"
                    />
                </div>
                <span class="mt-12 text-3xl">HackTAMS 2021</span>
            </div>
        </div>
    )
}

export default Portfolio
