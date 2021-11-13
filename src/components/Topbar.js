// @ts-nocheck
import React from 'react'
import {BsFillPersonFill} from "react-icons/bs"
import {AiFillMail} from "react-icons/ai"
import {IoSchoolSharp} from "react-icons/io5"
import {BsGithub} from "react-icons/bs"
import {Link} from 'react-router-dom'

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
                    <div class="flex items-center ml-7">
                        <IoSchoolSharp class="text-2xl mr-2"/>
                        <span class="text-base font-normal">Texas Academy of Math and Science</span>
                    </div>
                </div>
                <div class="flex flex-row items-center">
                    <Link to="/" class="font-bold">
                        <a href="#intro">Home</a>
                    </Link>
                    <Link to="/projects" class="ml-7 font-bold">
                        <a href="#portfolio">Portfolio</a>
                    </Link>
                    <div class="ml-7 font-bold">
                        <a href="https://github.com/dxiao01" target="_blank">
                            <BsGithub class="w-7 h-7"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
