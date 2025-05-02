import { Link } from "@heroui/link";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <div className="flex items-center gap-2">
          <Link
            isExternal
            showAnchorIcon
            className="text-primary"
            href="https://github.com/shusingh"
            title="GitHub"
          >
            <p className="text-default-400 text-sm">Made with ❤️ by Shubham</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
