import Link from "next/link";

import { Card } from "@/components/ui";
import type { FeaturedProject } from "@/content/projects";
import { featuredWorkSection } from "@/content/projects";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: FeaturedProject;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      className={cn(
        "group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      href={`/case-studies/${project.slug}`}
    >
      <Card className="flex h-full flex-col gap-stack-sm transition-colors duration-300 group-hover:border-accent/40">
        <div
          aria-hidden="true"
          className="aspect-video w-full rounded-lg border border-border bg-background"
        />

        <div className="space-y-1">
          <p className="text-body-sm text-muted">{project.industry}</p>
          <h3 className="text-heading-4 font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
        </div>

        <p className="flex-1 text-body text-muted">{project.description}</p>

        <p className="text-body-sm text-foreground/80">{project.outcome}</p>

        <ul
          aria-label={featuredWorkSection.projectTagsAriaLabel}
          className="flex flex-wrap gap-2"
        >
          {project.technologies.map((tech) => (
            <li
              className="rounded-md border border-border px-2 py-0.5 text-caption text-muted"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>

        <span className="text-body-sm font-medium text-accent transition-colors duration-300 group-hover:text-accent/90">
          {featuredWorkSection.viewCaseStudyCta}
        </span>
      </Card>
    </Link>
  );
}
