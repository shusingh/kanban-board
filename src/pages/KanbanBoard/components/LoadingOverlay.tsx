/**
 * LoadingOverlay component that displays a loading state for the Kanban board
 *
 * @component
 * @returns {JSX.Element} The rendered loading overlay with spinner
 */
export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80">
      <div className="w-8 h-8 border-4 border-success border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
