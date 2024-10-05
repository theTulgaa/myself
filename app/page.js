import { About } from "@/components/About";
import { Farewell } from "@/components/Farewell";
import { Home1 } from "@/components/Home1";
import { Projects } from "@/components/Projects";


export default function Home() {
  return (
    <div className="">
      <section>
        <Home1 />
        <About />
        <Projects />
        <Farewell />
      </section>
    </div>
  );
}
