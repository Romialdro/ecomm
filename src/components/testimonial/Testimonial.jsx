/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonials</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-purple-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/myecom-d00b5.appspot.com/o/Alina.jpg?alt=media&token=7621db0e-70e7-4dca-9071-a49a869c8394" />
                                <p className="leading-relaxed">"I was blown away by the quality of the shirts. They are soft, comfortable, and the fit is perfect. Highly recommend!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Alina Gater</h2>
                                <p className="text-gray-500">Fashion Enthusiast</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/myecom-d00b5.appspot.com/o/Alina.jpg?alt=media&token=7621db0e-70e7-4dca-9071-a49a869c8394" />
                                <p className="leading-relaxed">"The smartphone I purchased is amazing. The camera quality is exceptional, and the battery life lasts all day. I’m really satisfied with my purchase."</p>
                                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Alexis Colleman</h2>
                                <p className="text-gray-500">Tech Blogger</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/myecom-d00b5.appspot.com/o/Alina.jpg?alt=media&token=7621db0e-70e7-4dca-9071-a49a869c8394" />
                                <p className="leading-relaxed">"I recently bought a laptop from this store, and it’s everything I needed for my work. Fast, reliable, and sleek in design."</p>
                                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sophie Turner</h2>
                                <p className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
