import React from "react";
import { FaMicrosoft, FaApple} from "react-icons/fa";
import { SiGoogle, SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Bengaluru,Karnataka 560103",
      openPositions: 3486,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Austin,Texas, United States",
      openPositions: 1342,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Vittal Mallya Road, Bangalore",
      openPositions: 2342,
      icon: <FaApple />,
    },
    {
      id:4,
      title:"Google",
      location:"Kothaguda, Telangana 500084",
      openPositions:1232,
      icon: <SiGoogle />,
    }
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
