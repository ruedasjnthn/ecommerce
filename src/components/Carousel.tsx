import { connect } from "net";
import { useState } from "react";
import { ImgData } from "./CarouselData";
import { ThumbnailData } from "./CarouselData";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const slides = ImgData;
  const length = slides.length;

  const nextSlides = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlides = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carousel">
      <div className="carousel__container">
        <div
          className="carousel__buttonContainer carousel__nextButton"
          onClick={nextSlides}
        >
          <svg
            className="carousel__btn"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="carousel__buttonContainer carousel__prevButton"
          onClick={prevSlides}
        >
          <svg
            className="carousel__btn"
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        {ImgData.map((img, index) => {
          return (
            <div
              className={
                index === current ? "carousel__slide active" : "carousel__slide"
              }
              key={index}
            >
              {index === current && (
                <img
                  src={img.image.src}
                  alt="product image"
                  className="carousel__image"
                />
              )}
            </div>
          );
        })}
        <div className="carousel__thumbnailContainer">
          {ThumbnailData.map((thumbnail, index) => {
            return (
              <div className={
                index === current
                  ? "carousel__thumbnailBorder active"
                  : "carousel__thumbnailBorder"
              }>
                <img
                src={thumbnail.image.src}
                alt="product thumbnail"
                className={
                  index === current
                    ? "carousel__thumbnail active"
                    : "carousel__thumbnail"
                }
                onClick={() => setCurrent(index)}
                key={index}
              />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
