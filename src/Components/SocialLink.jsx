import React from 'react'

const SocialLink = () => {
    return (
        <div className="bg-white font-quicksand">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A1B3B" fillOpacity="1" d="M0,128L1440,224L1440,0L0,0Z"></path></svg>

            <section className="mx-auto max-w-screen-xl font-quicksand bg-white text-gray-800">
                <section>
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div
                                className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                            >
                                <img
                                    alt="Party"
                                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            <div className="lg:py-24">
                                <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
                                <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-pink rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-pink rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-pink rounded-full"></span>
        </div>
                                <p className="mt-4 ">
                                    Parler du lien social, en visio ou en face. insister sur l'échange
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                                    atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                                    veniam tempora deserunt? Molestiae eius quidem quam repellat.
                                </p>


                            </div>
                        </div>
                    </div>
                </section>


            </section>
        </div>
    )
}

export default SocialLink