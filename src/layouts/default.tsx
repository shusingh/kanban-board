import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
      <main className="flex-1 container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
}
