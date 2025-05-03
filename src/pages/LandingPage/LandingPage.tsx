import { Link } from "@heroui/link";
import { button } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { subtitle, title } from "@/components/primitives";
import "@/styles/globals.css";

/**
 * LandingPage component that displays the main landing page with hero section and features
 *
 * @component
 * @returns {JSX.Element} The rendered landing page with hero section, features, and call-to-action
 */
export default function LandingPage() {
  return (
    <DefaultLayout>
      <div className="dotted-bg" />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center gap-4 py-12 md:py-16">
          <div className="inline-block max-w-lg justify-center text-center">
            <span className={title()}>Get Your&nbsp;</span>
            <span className={title({ color: "success" })}>Tasks&nbsp;</span>
            <br />
            <span className={title()}>In Order, The Fun Way!</span>
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
                <h3 className="text-2xl font-semibold text-default-600">
                  Light or Dark? You Choose!
                </h3>
                <p className="text-default-500">
                  Whether you&apos;re a night owl or an early bird, switch between themes with a
                  single click. Your eyes will thank you!
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
                <h3 className="text-2xl font-semibold text-default-600">
                  Drag, Drop, and Get Stuff Done
                </h3>
                <p className="text-default-500">
                  Move tasks around like a boss! From &quot;To Do&quot; to &quot;In Progress&quot;
                  to &quot;Done&quot; - it&apos;s as easy as dragging and dropping. No stress, just
                  progress.
                </p>
              </div>
            </div>

            {/* Feature 3: Card Actions */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-default-600">
                  Quick Actions, Zero Hassle
                </h3>
                <p className="text-default-500">
                  Edit, delete, or start fresh - all at your fingertips. Managing tasks has never
                  been this smooth!
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
      </div>
    </DefaultLayout>
  );
}
