import Image from "next/image";
import Animate from "./components/Animate";
import GridHome from "./components/grid";



export default function Home() {
  return (
    <main>
        <Animate />
        <GridHome />
    </main>
  );
}
