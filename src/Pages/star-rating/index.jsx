import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
import { Navbar } from "../../components/Navbar/Navbar";
// import { IconName } from "react-icons/bs";
// import { BsIconName } from "react-icons/bs";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div>
      <Navbar />
      <div className="contatiner">
        <div className="inner">
          <div
            style={{
              width: "100%",
              height: "400px",
            }}
          >
            <div className="inner-layout">
              <div className="star-rating">
                {[...Array(noOfStars)].map((_, index) => {
                  index += 1;

                  return (
                    <FaStar
                      key={index}
                      className={
                        index <= (hover || rating) ? "active" : "inactive"
                      }
                      onClick={() => handleClick(index)}
                      onMouseMove={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                      size={40}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
