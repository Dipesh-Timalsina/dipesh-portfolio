import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Contact } from "../../components/Contact/Contact";
// import { BsIconName } from "react-icons/bs";
// import { FaIconName } from "react-icons/fa";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <>
      <div className="layout">
        <div className="topsection">
          <div className="container">
            <BsArrowLeftCircleFill
              onClick={handlePrevious}
              className="arrow arrow-left"
            />
            {images && images.length
              ? images.map((imageItem, index) => (
                  <img
                    key={imageItem.id}
                    alt={imageItem.download_url}
                    src={imageItem.download_url}
                    className={
                      currentSlide === index
                        ? "current-image"
                        : "current-image hide-current-image"
                    }
                  />
                ))
              : null}
            <BsArrowRightCircleFill
              onClick={handleNext}
              className="arrow arrow-right"
            />
            <span className="circle-indicators">
              {images && images.length
                ? images.map((_, index) => (
                    <button
                      key={index}
                      className={
                        currentSlide === index
                          ? "current-indicator"
                          : "current-indicator inactive-indicator"
                      }
                      onClick={() => setCurrentSlide(index)}
                    ></button>
                  ))
                : null}
            </span>
          </div>
        </div>
        <div className="learnings">
          <h1>Learnings</h1>
          <ol>
            <li>
              Utilized the useState hook to manage local state variables such as
              images, currentSlide, errorMsg, and loading.
            </li>

            <li>
              Used the useEffect hook to fetch data from an API when the
              component mounts or when the url changes.
            </li>
            <li>
              Incorporated error handling within the fetchImages function to
              catch and display error messages if the API request fails.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
