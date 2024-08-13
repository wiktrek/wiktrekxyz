import { useToast } from "~/components/ui/use-toast";
import { useSpring, animated } from "@react-spring/web";
export default function About() {
  const { toast } = useToast();
  const springs = useSpring({
    from: { y: -400 },
    to: { y: 0, x: 0 },
  });
  const springs2 = useSpring({
    from: { x: -600 },
    to: { y: 0, x: 0 },
  });
  return (
    <section id="about" className="pt-96 h-[100vh] text-4xl">
      <animated.p style={{ ...springs }}>
        Hello, I'm{" "}
        <button
          className="text-primary"
          onClick={() => {
            toast({
              title: "Clicked",
            });
          }}
        >
          wiktrek
        </button>
      </animated.p>
      <animated.p className="text-xl" style={{ ...springs2 }}>
        I love programming and building stuff
      </animated.p>
    </section>
  );
}
