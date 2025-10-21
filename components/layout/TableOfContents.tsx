"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocSection {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TocSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66%",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block sticky top-24 h-fit">
      <div className="space-y-2 p-4 border-l-2 border-border">
        <p className="font-semibold text-sm text-foreground mb-3">On this page</p>
        <ul className="space-y-2">
          {sections.map(({ id, title }) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={cn(
                  "text-sm text-left w-full py-1.5 px-3 rounded transition-colors hover:bg-accent hover:text-accent-foreground",
                  activeId === id
                    ? "text-primary font-medium bg-accent/50"
                    : "text-muted-foreground"
                )}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
