// Projects.js
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-orange-500 font-bold text-center mb-10">
                My Projects
            </h2>


            <div className="p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
                                "https://github.com/Arvindh177/Blog-app"
                        className="w-full h-full">
                        <img src=
                                    "Blogapp-png.png"
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
                            "https://github.com/Arvindh177/Blog-app">
                            Blog App
                        </a>
                    </h2>
                    <p>
                        This is a project built on MERN stack with Material UI support onto UI desgin. 
                        Simple and also comes with User Authentication with admin privileages.
                    </p>
                </div>
            </div>


            <div className="p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://docs.google.com/document/d/1DP9oRUio8md6NEa4BsSnw-E5t3_gP6gvBMBzDnMZnQU/edit?usp=sharing"
                       className="w-full h-full">
                        <img src="Eventize-png.png"
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href="https://github.com/Arvindh177/Events-Clone">
                            Eventize - Booking app
                        </a>
                    </h2>
                    <p>
                        Built on Vite + React surrounded on MERN stack. Multer implementation for handling form-data. Clone of Airbnb in terms of UI and UX with the concept of local events booking. Unfortunately not published but feel free to click and check details and code files.
                    </p>
                </div>
            </div>


            <div className="p-10 bg-orange-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
                            "https://mean-crud-1c4e9.web.app/create-employee"
                        className="w-full h-full">
                        <img src=
                                    "mean-crud.png"
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
                                "https://mean-crud-1c4e9.web.app/create-employee">
                            MEAN CRUD
                        </a>
                    </h2>
                    <p>
                        CRUD application created with Angular instead of usual React for my taste,
                         to learn and gain experience in Angular. Published with Firebase and MongoDB atlas for database storage.
                    </p>
                </div>
            </div>


            <div className="p-10 bg-orange-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://docs.google.com/document/d/1DP9oRUio8md6NEa4BsSnw-E5t3_gP6gvBMBzDnMZnQU/edit?usp=sharing"
                       className="w-full h-full">
                        <img src="Eventize-png.png"
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href="https://github.com/Arvindh177/Events-Clone">
                        HybridFlicks – Movie Recommender
                        </a>
                    </h2>
                    <p>
                    Authored with a team of 3 for the architecture of HybridFlicks, a unique recommendation system leveraging Matrix Factorization 
                    and Content-Based Filtering; processed over 1M+ user interactions to refine algorithms. Presented and certified 
                    at ICSE-2024 with the paper titled “HybridFlicks: Enhancing Movie recommendations through Integrated 
                    Collaborative Filtering and Content-Based Methods”. So basically python and Machine learning.
                    </p>
                </div>
            </div>
        </section>
    );
}