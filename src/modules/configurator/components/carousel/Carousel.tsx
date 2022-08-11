import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../shared";

const Carousel: React.FC = ({}) => {
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);
  const [carousel, setCarousel] = useRecoilState(configuratorAtoms.setCarousel);

  return (
    <div>
      {carousel === 6 && setCarousel(1)}
      {carousel === 0 && setCarousel(5)}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6One" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Blue, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6One" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Blue, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6One" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Blue, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6One" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Blue, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6One" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Blue, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6Two" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Blue, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6Two" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Blue, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6Two" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Blue, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6Two" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Blue, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Ultra Blue" &&
        wheel === "RS6Two" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Blue, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6One" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Black, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6One" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Black, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6One" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Black, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6One" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Black, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6One" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Black, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6Two" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Black, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6Two" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Black, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6Two" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Black, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6Two" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Black, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Black" &&
        wheel === "RS6Two" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Black, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6Two" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=White, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6Two" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=White, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6Two" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=White, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6Two" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=White, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6Two" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=White, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6One" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=White, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6One" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=White, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6One" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=White, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6One" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=White, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS6 AVANT" &&
        paint === "Polar White" &&
        wheel === "RS6One" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=White, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5One" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Nardo Gay, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5One" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Nardo Gay, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5One" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Nardo Gay, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5One" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Nardo Gay, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5One" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Nardo Gay, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5Two" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Nardo Gay, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5Two" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Nardo Gay, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5Two" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Nardo Gay, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5Two" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Nardo Gay, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Nardo Gay" &&
        wheel === "RS5Two" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Nardo Gay, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5One" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Red, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5One" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Red, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5One" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Red, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5One" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Red, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5One" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Red, Wheel Style=One.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5Two" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Red, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5Two" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Red, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5Two" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Red, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5Two" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Red, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Tango Red" &&
        wheel === "RS5Two" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Red, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5One" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Blue, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5One" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Blue, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5One" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Blue, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5One" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Blue, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5One" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Blue, Wheel Style=One-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5Two" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Blue, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5Two" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Blue, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5Two" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Blue, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5Two" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Blue, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI RS5" &&
        paint === "Turbo Blue" &&
        wheel === "RS5Two" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Blue, Wheel Style=Two-1.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronOne" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Green, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronOne" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Green, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronOne" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Green, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronOne" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Green, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronOne" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Green, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronTwo" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=Green, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronTwo" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=Green, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronTwo" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=Green, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronTwo" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=Green, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Tactical Green" &&
        wheel === "e-tronTwo" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=Green, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronOne" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=White, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronOne" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=White, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronOne" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=White, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronOne" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=White, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronOne" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=White, Wheel Style=One.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronTwo" &&
        carousel === 1 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front Left, Color=White, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronTwo" &&
        carousel === 2 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Front, Color=White, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronTwo" &&
        carousel === 3 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Side, Color=White, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronTwo" &&
        carousel === 4 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back Left, Color=White, Wheel Style=Two.png"
          />
        )}
      {car === "AUDI E-TRON GT" &&
        paint === "Florett Silver" &&
        wheel === "e-tronTwo" &&
        carousel === 5 && (
          <img
            className="carouselImg"
            src="/Assets2/View=Back, Color=White, Wheel Style=Two.png"
          />
        )}
    </div>
  );
};

export default Carousel;
