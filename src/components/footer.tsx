import { siteConfig } from "@/config/site";

/**
 * Footer component that displays the site's footer content
 *
 * @component
 * @returns {JSX.Element} The rendered footer with author information
 */
export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3 bg-background">
      <p className="text-default-500">Made with ❤️ by {siteConfig.author}</p>
    </footer>
  );
}
