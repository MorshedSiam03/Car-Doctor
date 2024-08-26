import { useEffect, useState } from "react";

const Team = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/teams")
        .then((res) => res.json())
        .then((data) => setTeams(data));
    }, []);

    return (
        <div>
            <div className="flex flex-col mt-20 items-center justify-center h-full">
            <p className="font-bold text-3xl text-[#FF3811]">Team</p>
            <h1 className="text-6xl lg:w-2/3 md:w-4/5 font-bold text-center">Meet Our Team</h1>
            <p className="pt-4 pb-4 text-center text-gray-500">
            The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.             </p>
        </div>
        <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {teams.map((teams) => (
          <div key={teams.id}>
            <div className="rounded-xl bg-base-100 p-8 w-[90%]  shadow-xl">
              <figure>
                <img
                  src={teams.img}
                // src="/src/assets/images/teams/1.png"
                  className="h-80 rounded-lg  mx-auto w-full "
                  alt="Service"
                />
              </figure>
              <div className="flex justify-center">
                <div>
                  <h2 className="text-3xl flex justify-center font-bold my-1">{teams.name}</h2>
                  <h2 className="text-xl flex justify-center text-gray-500 font-semibold">
                    {teams.expertise}
                  </h2>
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-2">
                <img src="/src/assets/icons/Group 4889.svg" alt="" />
                <img src="/src/assets/icons/Group 4893.svg" alt="" />
                <img src="/src/assets/icons/Group 4891.svg" alt="" />
                <img src="/src/assets/icons/Group 4892.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
        </div>
        </div>
    );
};

export default Team;