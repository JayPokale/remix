import { useState } from "react";

const ChildFace = (props: any) => {
  const [isAnimating, setAnimating] = useState(false);

  const animation = () => {
    if (isAnimating) return;
    setAnimating(true);

    const animation = document.querySelector(`#animation${props.index}`);
    const cream = document.querySelector(`#cream${props.index}`)!;
    const cake = document.querySelector(`#cake${props.index}`)!;
    const plate = document.querySelector(`#plate${props.index}`)!;

    animation?.classList.remove("hidden");
    plate.classList.remove("hidden");
    cake.classList.remove("hidden");
    plate.animate([{ opacity: "0%", scale: "1000%" }, { opacity: "100%" }], {
      duration: 500,
    });
    cake.animate([{ opacity: "0%", scale: "1000%" }, { opacity: "100%" }], {
      duration: 500,
    });
    setTimeout(() => {
      cream.classList.remove("hidden");
      plate.animate(
        [{ transform: "translate(0, 0)" }, { transform: "translate(0, 200%)" }],
        {
          duration: 750,
        }
      );
    }, 500);
    setTimeout(() => {
      plate.classList.add("hidden");
      cake.animate(
        [{ transform: "translate(0, 0)" }, { transform: "translate(0, 200%)" }],
        {
          duration: 750,
        }
      );
    }, 1250);
    setTimeout(() => {
      cake.classList.add("hidden");
      cream.animate([{ opacity: "100%" }, { opacity: "0%" }], {
        duration: 750,
      });
    }, 2000);
    setTimeout(() => {
      cream.classList.add("hidden");
      setAnimating(false);
    }, 2750);
  };

  return (
    <div
      className="w-80 cursor-pointer relative flex flex-col items-center"
      onClick={() => animation()}
    >
      <div>
        <img src={props.url} className="h-60 w-60 object-cover" />
        <h1 className="text-xl text-center py-4">{props.name}</h1>
      </div>
      <div
        id={`animation${props.index}`}
        className="absolute inset-0 px-20 py-12 z-10 hidden w-40"
      >
        <img
          id={`cream${props.index}`}
          src="/cream.png"
          className="absolute hidden"
        />
        <img
          id={`cake${props.index}`}
          src="/panCake.png"
          className="absolute hidden"
        />
        <img
          id={`plate${props.index}`}
          src="/woodenPlate.png"
          className="scale-90 absolute hidden"
        />
      </div>
    </div>
  );
};

export default ChildFace;
