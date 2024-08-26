export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-orange-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src="Portfolio Pic.jpg"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-orange-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p className="text-xl">
                    Heavily Dedicated, postive minded, <p className="text-orange-500 font-3xl"> Fun and loving </p>
                </p>
               
                <p>
                I'm passionate on self-learning. A great problem solver (Yes, I taught myself organic chemistry with own terms like 'sober' and 'alcoholic' to ace exam).
                Creative and innovative in terms of approach and currently looking for oppurtunity to excel in this expanding tech-field.
                </p>
                <p>
                 Apparently jumped from Game development to Full-stack development to keep my options more open. Amazing decision making and regretting not becoming a psychiatrist.
                </p>
                <p>Completed B.tech in CSE at SRM with a CGPA of 9.22</p>
            </div>
        </section>
    );
}