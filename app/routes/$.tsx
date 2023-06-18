import { LinksFunction, LoaderArgs } from "@remix-run/node";
import ChildFace from "~/components/ChildFace";
import styles from "~/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const Fallback = () => {
  return (
    <div className="flex flex-col items-center justify-evenly xl:h-screen font-sans overflow-hidden">
      <div className="w-full max-w-lg text-center flex flex-col gap-6">
        <h1 className="heading text-4xl">404</h1>
        <h2 className="text-2xl">It looks like we couldn't find this page</h2>
        <h2 className="text-2xl">
          To make it up to you, plese choose
          <br />a co-founder to pie in the face
        </h2>
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        <ChildFace
          url="https://media.istockphoto.com/id/534798527/photo/baby-girl-smiling.jpg?s=612x612&w=0&k=20&c=7KDeBFqziaeMlSsGOdQ0hO7XxrRZt-Tz1r40PhVG7k8="
          name="Thomas"
          index="1"
        />
        <ChildFace
          url="https://img.freepik.com/premium-photo/cute-baby-diaper-looking-camera-isolated-white-background_58409-25703.jpg"
          name="Celeb"
          index="2"
        />
        <ChildFace
          url="https://media.istockphoto.com/id/534798527/photo/baby-girl-smiling.jpg?s=612x612&w=0&k=20&c=7KDeBFqziaeMlSsGOdQ0hO7XxrRZt-Tz1r40PhVG7k8="
          name="Ryan"
          index="3"
        />
        <ChildFace
          url="https://img.freepik.com/premium-photo/cute-baby-diaper-looking-camera-isolated-white-background_58409-25703.jpg"
          name="Michael"
          index="4"
        />
      </div>
    </div>
  );
};

export default Fallback;
