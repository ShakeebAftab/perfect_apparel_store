import Carousel from "react-material-ui-carousel";

const test: any[] = [
  {
    name: "Hello",
  },
  {
    name: "Test",
  },
  {
    name: "Enough",
  },
];

export const Slider = () => {
  return (
    <Carousel indicators={false}>
      {test.map((t: any) => (
        <p>{t.name}</p>
      ))}
    </Carousel>
  );
};
