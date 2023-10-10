import cardImg1 from "../../assets/card-img1.png";
import cardImg2 from "../../assets/card-img2.png";
import cardImg3 from "../../assets/card-img3.png";
import { BsFillFuelPumpFill, BsPeopleFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
const cardData = [
  {
    title: "Koenigsegg",
    type: "sports",
    carImg: cardImg1,
    fuel: "90L",
    gear: "Manual",
    space: "2 People",
    price: "$99.00",
    discount: "",
    icon1: <BsFillFuelPumpFill />,
    icon2: <TbSteeringWheel />,
    icon3: <BsPeopleFill />,
  },
  {
    title: "Nissan GT - R",
    type: "sports",
    carImg: cardImg2,
    fuel: "80L",
    gear: "Manual",
    space: "2 People",
    price: "$99.00",
    discount: "$100",
    icon1: <BsFillFuelPumpFill />,
    icon2: <TbSteeringWheel />,
    icon3: <BsPeopleFill />,
  },
  {
    title: "Rolls - Royce",
    type: "Sedan",
    carImg: cardImg3,
    fuel: "70L",
    gear: "Manual",
    space: "4 People",
    price: "$96.00",
    discount: "",
    icon1: <BsFillFuelPumpFill />,
    icon2: <TbSteeringWheel />,
    icon3: <BsPeopleFill />,
  },
  {
    title: "Nissan GT - R",
    type: "sports",
    carImg: cardImg2,
    fuel: "80L",
    gear: "Manual",
    space: "2 People",
    price: "$99.00",
    discount: "$100",
    icon1: <BsFillFuelPumpFill />,
    icon2: <TbSteeringWheel />,
    icon3: <BsPeopleFill />,
  },
];

export default cardData;
