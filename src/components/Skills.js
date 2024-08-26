// Skills.js
export default function Skills() {
    const skills = ["JavaScript", "HTML / CSS", "React.js", "Express.js", "MongoDB",
         "Node.js", "C++", "React Native", "Webflow", "Socket.io", "Unreal Engine 4", "Angular" , "MySQL" ,
          "Blender 3D", "Will suggest good old rock songs based on mood" ];
    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-orange-500 font-bold">
                What I bring to the table..
            </h2>
            <div className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                             className="cursor-pointer px-12 py-10 
                                        rounded bg-orange-200 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl">
                            {skill}
                        </div>
                    )})}
            </div>
        </section>
    )
}