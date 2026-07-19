export function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-primary-600/20 border-t-primary-600" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
