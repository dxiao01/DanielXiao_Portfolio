// @ts-nocheck
import React from 'react'
import {BsFillPersonFill} from "react-icons/bs"
import {AiFillMail} from "react-icons/ai"

const Topbar = () => {
    return (
        <div class="w-full bg-white fixed top-0 z-2 h-4.5 text-topbar">
            <div class="px-7 flex items-center justify-between pt-3">
                <div class="flex items-center">
                    <img src={process.env.PUBLIC_URL + '/DanielXiao.png'} alt="Daniel Xiao" class="rounded-3xl w-12 h-12"/>
                    <div class="flex items-center ml-7">
                        <BsFillPersonFill class="text-2xl mr-1.5"/>
                        <span class="text-base font-normal">(817)995-9430</span>
                    </div>
                    <div class="flex items-center ml-7">
                        <AiFillMail class="text-2xl mr-2"/>
                        <span class="text-base font-normal">danielxiaobci@gmail.com</span>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="font-bold">
                        <a href="#intro">Intro</a>
                    </div>
                    <div class="ml-7 font-bold">
                        <a href="#portfolio">Portfolio</a>
                    </div>
                    <div class="ml-7 font-bold">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
