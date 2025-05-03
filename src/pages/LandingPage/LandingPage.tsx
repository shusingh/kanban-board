import { Link } from "@heroui/link";
import { button } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { subtitle, title } from "@/components/primitives";

export default function LandingPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg justify-center text-center">
          <span className={title()}>Organize Your&nbsp;</span>
          <span className={title({ color: "violet" })}>Tasks&nbsp;</span>
          <br />
          <span className={title()}>With Kanban</span>
          <div className={subtitle({ class: "mt-4" })}>{siteConfig.description}</div>
        </div>

        <div className="flex gap-3">
          <Link
            aria-label="Kanban Board"
            className={button({
              color: "success",
              radius: "md",
              variant: "flat",
              class: `inline-flex transform-gpu items-center gap-2 px-6 py-3 antialiased transition duration-200 will-change-transform hover:scale-105 active:scale-95`,
            })}
            href="/kanban-board"
          >
            <span className="font-medium">View Board</span>
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
