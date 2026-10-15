import { useEffect, useState } from "react";
import { Command } from "cmdk";

type BlogPost = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  blogPosts: BlogPost[];
};

const navigation = (path: string) => {
  window.location.assign(path);
};

const commands = [
  { value: "home", label: "Go home", keys: ["g", "h"], path: "/" },
  {
    value: "projects",
    label: "Jump to projects",
    keys: ["g", "p"],
    path: "/#projects",
  },
  { value: "blog", label: "Open blog", keys: ["g", "b"], path: "/blog" },
  { value: "about", label: "Open about", keys: ["g", "a"], path: "/about" },
];

export default function KeyboardShortcuts({ blogPosts }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [awaitingSequence, setAwaitingSequence] = useState(false);
  const isMac = /Mac|iPhone|iPad|iPod/.test(
    navigator.platform || navigator.userAgent,
  );

  useEffect(() => {
    let sequenceTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.isContentEditable ||
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT";

      if (event.key === "Escape") {
        setIsOpen(false);
        setAwaitingSequence(false);
        return;
      }

      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen(true);
        setAwaitingSequence(false);
        return;
      }

      if (isTyping || event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === "?") {
        event.preventDefault();
        setIsOpen((open) => !open);
        setAwaitingSequence(false);
        return;
      }

      if (awaitingSequence) {
        const destinations: Record<string, string> = {
          h: "/",
          p: "/#projects",
          b: "/blog",
          a: "/about",
        };
        const destination = destinations[event.key.toLowerCase()];

        setAwaitingSequence(false);
        if (sequenceTimeout) clearTimeout(sequenceTimeout);

        if (destination) {
          event.preventDefault();
          navigation(destination);
        }
        return;
      }

      if (event.key.toLowerCase() === "g") {
        event.preventDefault();
        setAwaitingSequence(true);
        sequenceTimeout = setTimeout(() => setAwaitingSequence(false), 1200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (sequenceTimeout) clearTimeout(sequenceTimeout);
    };
  }, [awaitingSequence]);

  const runCommand = (path: string) => {
    setIsOpen(false);
    navigation(path);
  };

  const groupClassName =
    "pb-2 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:text-xl [&_[cmdk-group-heading]]:text-ring";
  const itemClassName =
    "group flex cursor-pointer items-center justify-between gap-4 px-3 py-2 outline-none transition-all";

  return (
    <>
      <button
        type="button"
        aria-label="Open command menu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-background/80 px-3 py-2 font-mono text-base font-bold text-primary backdrop-blur transition-all hover:text-secondary focus-visible:underline focus-visible:outline-none"
      >
        search <span className="text-accent">{isMac ? "⌘K" : "Ctrl K"}</span>
      </button>

      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        label="Command menu"
        overlayClassName="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        contentClassName="fixed left-1/2 top-[18vh] z-50 w-[min(92vw,560px)] -translate-x-1/2 overflow-hidden bg-background font-mono font-bold text-text shadow-2xl shadow-black"
      >
        <Command.Input
          autoFocus
          placeholder="Where to?"
          className="w-full bg-transparent px-6 pb-2 pt-6 text-xl text-ring outline-none placeholder:text-primary/50"
        />
        <Command.List className="max-h-[min(60vh,420px)] overflow-y-auto px-3 pb-4">
          <Command.Empty className="px-3 py-8 text-center text-base font-normal text-secondary">
            Nothing here. Try something else.
          </Command.Empty>
          <Command.Group heading="Navigate" className={groupClassName}>
            {commands.map((command) => (
              <Command.Item
                key={command.value}
                value={`${command.value} ${command.label}`}
                onSelect={() => runCommand(command.path)}
                className={itemClassName}
              >
                <span className="text-primary group-aria-selected:text-secondary group-aria-selected:underline">
                  {command.label}
                </span>
                <span className="shrink-0 text-sm text-accent">
                  {command.keys.join(" then ")}
                </span>
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Blog posts" className={groupClassName}>
            {blogPosts.map((post) => (
              <Command.Item
                key={post.id}
                value={`${post.title} ${post.description} blog post`}
                onSelect={() => runCommand(`/blog/${post.id}`)}
                className={itemClassName}
              >
                <span className="min-w-0">
                  <span className="block text-primary group-aria-selected:text-secondary group-aria-selected:underline">
                    {post.title}
                  </span>
                  <span className="block truncate text-sm text-secondary">
                    {post.description}
                  </span>
                </span>
                <span className="shrink-0 text-sm text-accent opacity-0 group-aria-selected:opacity-100">
                  -&gt;
                </span>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
        <div className="flex items-center justify-between px-6 pb-4 text-sm font-normal text-secondary">
          <span>
            <span className="text-accent">↑↓</span> select{" "}
            <span className="text-accent">↵</span> open
          </span>
          <span>
            <span className="text-accent">esc</span> close
          </span>
        </div>
      </Command.Dialog>
    </>
  );
}
