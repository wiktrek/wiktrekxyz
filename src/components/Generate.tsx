import { useState } from "react";
import { useToast } from "~/components/ui/use-toast";
import { Textarea } from "~/components/ui/textarea";
export default function GenerateLink() {
  const { toast } = useToast();
  const [link, setLink] = useState("");
  function CopyLink() {
    console.log("Link copied to clipboard");
    navigator.clipboard.writeText(link);
    toast({
      title: "Link copied to clipboard",
    });
  }
  function format(text: string): string {
    return `https://wiktrek.xyz/just/q?q="${text.replaceAll(" ", "%20")}"`;
  }
  return (
    <div className="justify-center items-center flex flex-col m-10">
      <Textarea
        placeholder="Enter your question here"
        onChange={(e) => setLink(format(e.target.value))}
        className="w-96 p-4 m-2 rounded resize-none"
      />
      <Textarea
        value={link}
        className="w-96 p-4 m-2 rounded h-32 resize-none"
        placeholder={'https://wiktrek.xyz/just/q?q=""'}
      />
      <button onClick={CopyLink}>Copy Link</button>
      <p>
        You can make this link shorter with my{" "}
        <a className="underline" href="https://project.wiktrek.xyz/url">
          link shortener
        </a>
      </p>
    </div>
  );
}
