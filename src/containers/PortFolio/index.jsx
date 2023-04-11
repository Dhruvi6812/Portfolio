import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/PageHeaderContent";
import ImageOne from "../../images/images1.jpg";
import ImageTwo from "../../images/images2.jpg";
import ImageThree from "../../images/images3.jpg";
import ImageFour from "../../images/images4.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Notes App",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "Suplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "todo app",
    image: ImageFour,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Delelopment",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const PortFolio = () => {
  const [filteredvalue, setFilteredvalue] = useState(1);
  const [hoveredvalue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredvalue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("======================");
  console.log("hoveredvalue");
  console.log("=====================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="protfolio" className="protfolio">
      <PageHeaderContent
        headerText="My ProtFolio"
        icon={<BsInfoCircleFill size={30} />}
      />
      <div className="protfolio__content">
        <ul className="protfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="protfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="protfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="protfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredvalue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PortFolio;
