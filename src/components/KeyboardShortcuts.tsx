import { useEffect, useState } from "react";
import { Command } from "cmdk";

type BlogPost = {
  id: string;
  title: string;
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

  return (
    <>
      <button
        type="button"
        aria-label="Open command menu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 border border-primary/40 bg-background/90 px-3 py-2 font-mono text-sm font-bold text-primary shadow-lg backdrop-blur transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        search <kbd className="ml-1 border border-primary/50 px-1.5 py-0.5 text-xs">{isMac ? "⌘K" : "Ctrl K"}</kbd>
      </button>

      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        label="Command menu"
        overlayClassName="fixed inset-0 z-50 bg-black/70 px-4 backdrop-blur-sm"
        contentClassName="fixed left-1/2 top-[18vh] z-50 w-[min(92vw,560px)] -translate-x-1/2 overflow-hidden border border-primary/50 bg-background font-mono text-text shadow-2xl"
      >
        <Command.Input
          autoFocus
          placeholder="What do you want to do?"
          className="w-full border-b border-primary/30 bg-transparent px-5 py-4 text-base text-ring outline-none placeholder:text-text/50"
        />
        <Command.List className="max-h-[min(60vh,380px)] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-8 text-center text-sm text-text/70">
            No matching commands.
          </Command.Empty>
          <Command.Group heading="Navigate" className="px-1 pb-2 text-xs text-primary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em]">
            {commands.map((command) => (
              <Command.Item
                key={command.value}
                value={`${command.value} ${command.label}`}
                onSelect={() => runCommand(command.path)}
                className="flex cursor-pointer items-center justify-between gap-4 px-3 py-3 text-base text-text outline-none aria-selected:bg-secondary aria-selected:text-ring"
              >
                <span>{command.label}</span>
                <span className="flex shrink-0 gap-1">
                  {command.keys.map((key) => (
                    <kbd key={key} className="min-w-7 border border-primary/40 px-1.5 py-0.5 text-center text-sm text-primary">
                      {key}
                    </kbd>
                  ))}
                </span>
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Separator className="my-2 h-px bg-primary/20" />
          <Command.Group heading="Blog posts" className="px-1 pb-2 text-xs text-primary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em]">
            {blogPosts.map((post) => (
              <Command.Item
                key={post.id}
                value={`${post.title} blog post`}
                onSelect={() => runCommand(`/blog/${post.id}`)}
                className="flex cursor-pointer items-center justify-between gap-4 px-3 py-3 text-base text-text outline-none aria-selected:bg-secondary aria-selected:text-ring"
              >
                <span>{post.title}</span>
                <span className="text-xs text-text/60">blog</span>
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Separator className="my-2 h-px bg-primary/20" />
          <Command.Group heading="Help" className="px-1 text-xs text-primary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em]">
            <Command.Item
              value="keyboard shortcuts help"
              onSelect={() => setIsOpen(false)}
              className="flex cursor-pointer items-center justify-between px-3 py-3 text-base text-text outline-none aria-selected:bg-secondary aria-selected:text-ring"
            >
              <span>Close command menu</span>
              <kbd className="border border-primary/40 px-1.5 py-0.5 text-sm text-primary">esc</kbd>
            </Command.Item>
          </Command.Group>
        </Command.List>
        <div className="flex items-center justify-between border-t border-primary/20 px-5 py-3 text-xs text-text/60">
          <span>Type to filter commands</span>
          <span><kbd className="border border-primary/30 px-1">↑↓</kbd> select <kbd className="border border-primary/30 px-1">↵</kbd> run</span>
        </div>
      </Command.Dialog>
    </>
  );
}
