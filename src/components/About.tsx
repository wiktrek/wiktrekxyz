import { useToast } from "~/components/ui/use-toast";
import { useSpring, animated, type SpringValues } from "@react-spring/web";
export default function About() {
  const { toast } = useToast();
  const springs = useSpring({
    from: { y: -400, opacity: 0 },
    to: { y: 0, x: 0, opacity: 1 },
    delay: 200,
  });
  const changeColor = useSpring({
    delay: 500,
    from: { color: "var(--primary)", opacity: 0.6, y: -40 },
    to: { color: "var(--text)", opacity: 1, y: 0 },
  });
  const springs2 = useSpring({
    from: { x: -300, opacity: 0 },
    to: { y: 0, x: 0, opacity: 1 },
    delay: 800,
  });
  return (
    <section id="about" className="pt-96 h-[100vh] text-4xl ">
      <animated.h1 style={{ ...springs }}>
        Hello, I'm{" "}
        <animated.a
          style={{ ...changeColor }}
          href="https://github.com/wiktrek"
          target="_blank"
        >
          wiktrek
        </animated.a>
        .
      </animated.h1>
      <animated.h2 className="text-xl" style={{ ...springs2 }}>
        I love programming and building stuff
      </animated.h2>
    </section>
  );
}
