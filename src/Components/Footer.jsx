import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="bg-dark-purple">



            <footer className="bg-dark-purple max-w-screen-xl mx-auto text-white mt-12 py-8">
                <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                    <p className="text-sm ">©BetwinUp - Copyright 2023. All Rights Reserved.</p>


                    <div className="flex -mx-2">
                        <a href="https://www.linkedin.com/in/alexandre-pires-de-almeida" className="mx-2 text-2xl text-pink transition-colors duration-300  hover:text-white " aria-label="Linkedin">
                            <AiFillLinkedin />
                        </a>



                        <a href="https://github.com/AlexandrePDA" className="mx-2 text-2xl text-pink transition-colors duration-300  hover:text-white" aria-label="Github">
                            <AiFillGithub />
                        </a>
                    </div>
                    <p>Made by <span className="text-pink">Alexandre</span></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer