import { useToast } from "~/components/ui/use-toast";
export default function About() {
  const { toast } = useToast();
  return (
    <section id="about" className="pt-96 h-[100vh] text-4xl">
      <p>
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
      </p>
      <p className="text-xl">I love programming and building stuff</p>
    </section>
  );
}
