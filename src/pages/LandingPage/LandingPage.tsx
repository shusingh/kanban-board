import { Link } from "@heroui/link";
import { button } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { subtitle, title } from "@/components/primitives";
import "@/styles/ScrollIndicator.css";

export default function LandingPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-12 md:py-16">
        <div className="inline-block max-w-lg justify-center text-center">
          <span className={title()}>Organize Your&nbsp;</span>
          <span className={title({ color: "success" })}>Tasks&nbsp;</span>
          <br />
          <span className={title()}>With Kanban</span>
          <div className={subtitle({ class: "mt-8" })}>{siteConfig.description}</div>
        </div>

        <div className="flex gap-3 mt-8">
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
        <div className="mt-32">
          <div aria-label="Scroll down to see more" className="scroll-indicator" />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-40">
        <div className="space-y-24">
          {/* Feature 1: Theme Switching */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-default-600">Seamless Theme Switching</h3>
              <p className="text-default-500">
                Experience the perfect balance of light and dark modes. Switch between themes
                effortlessly to match your environment and preferences.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden border border-background">
                <img
                  alt="Theme switching demonstration"
                  className="max-w-full h-auto"
                  src="/landing.gif"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Task Management */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="rounded-lg overflow-hidden border border-background">
                <img
                  alt="Task management demonstration"
                  className="max-w-full h-auto"
                  src="/add_card.gif"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-default-600">Intuitive Task Management</h3>
              <p className="text-default-500">
                Create, organize, and track your tasks with ease. Drag and drop tasks between
                columns to update their status from &apos;To Do&apos; to &apos;In Progress&apos; to
                &apos;Done&apos;.
              </p>
            </div>
          </div>

          {/* Feature 3: Card Actions */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-default-600">Powerful Card Actions</h3>
              <p className="text-default-500">
                Edit, delete, or clear your board with just a few clicks. Our intuitive interface
                makes task management a breeze.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden border border-background">
                <img
                  alt="Card actions demonstration"
                  className="max-w-full h-auto"
                  src="/features.gif"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
