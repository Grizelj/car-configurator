import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../shared";

const Paint: React.FC = ({}) => {
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);
  const [carousel, setCarousel] = useRecoilState(configuratorAtoms.setCarousel);

  return (
    <div>
      <>
        {carousel === 3 && setCarousel(1)}
        {carousel === 0 && setCarousel(2)}
        {car === "AUDI E-TRON GT" &&
          interior === "Black-1" &&
          carousel === 1 && (
            <img
              className="carouselImg"
              src="/Assets2/Car=e-tron, Color=Black, View=Seats.png"
            />
          )}
        {car === "AUDI E-TRON GT" &&
          interior === "Black-1" &&
          carousel === 2 && (
            <img
              className="carouselImg"
              src="/Assets2/Car=e-tron, Color=Black, View=Dash.png"
            />
          )}
        {car === "AUDI E-TRON GT" && interior === "Red" && carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/Car=e-tron, Color=Red, View=Seats.png"
          />
        )}
        {car === "AUDI E-TRON GT" && interior === "Red" && carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/Car=e-tron, Color=Red, View=Dash.png"
          />
        )}
        {car === "AUDI RS5" && interior === "Black&red" && carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/Car=RS5, Color=Black&red, View=Seats.png"
          />
        )}
        {car === "AUDI RS5" && interior === "Black&red" && carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/Car=RS5, Color=Black&red, View=Dash.png"
          />
        )}
        {car === "AUDI RS5" && interior === "Black&grey" && carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/Car=RS5, Color=Black&grey, View=Seats.png"
          />
        )}
        {car === "AUDI RS5" && interior === "Black&grey" && carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/Car=RS5, Color=Black&grey, View=Dash.png"
          />
        )}
        {car === "AUDI RS5" &&
          interior === "Lunar Silver" &&
          carousel === 1 && (
            <img
              className="carouselImg"
              src="/Assets2/Car=RS5, Color=Lunar Silver, View=Seats.png"
            />
          )}
        {car === "AUDI RS5" &&
          interior === "Lunar Silver" &&
          carousel === 2 && (
            <img
              className="carouselImg"
              src="/Assets2/Car=RS5, Color=Lunar Silver, View=Dash.png"
            />
          )}
        {car === "AUDI RS6 AVANT" &&
          interior === "Black&red" &&
          carousel === 1 && (
            <img
              className="carouselImg"
              src="/Assets2/Car=RS6, Color=Black&red, View=Seats.png"
            />
          )}
        {car === "AUDI RS6 AVANT" &&
          interior === "Black&red" &&
          carousel === 2 && (
            <img
              className="carouselImg"
              src="/Assets2/Car=RS6, Color=Black&red, View=Dash.png"
            />
          )}
        {car === "AUDI RS6 AVANT" &&
          interior === "Black&grey" &&
          carousel === 1 && (
            <img
              className="carouselImg"
              src="/Assets2/Car=RS6, Color=Black&grey, View=Seats.png"
            />
          )}
        {car === "AUDI RS6 AVANT" &&
          interior === "Black&grey" &&
          carousel === 2 && (
            <img
              className="carouselImg"
              src="/Assets2/Car=RS6, Color=Black&grey, View=Dash.png"
            />
          )}
        {car === "AUDI RS6 AVANT" && interior === "Brown" && carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/Car=RS6, Color=Brown, View=Seats.png"
          />
        )}
        {car === "AUDI RS6 AVANT" && interior === "Brown" && carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/Car=RS6, Color=Brown, View=Dash.png"
          />
        )}
      </>
    </div>
  );
};

export default Paint;
