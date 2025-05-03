import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

/**
 * DefaultLayout component that provides the basic structure for all pages
 *
 * @component
 * @param {DefaultLayoutProps} props - The props for the DefaultLayout component
 * @returns {JSX.Element} The rendered layout with navbar, main content, and footer
 */
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="w-full flex items-center justify-center py-3 bg-background">
        <p className="text-default-500">Made with ❤️ by {siteConfig.author}</p>
      </footer>
    </div>
  );
}
