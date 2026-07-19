import { Component, ErrorInfo, ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled UI error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface-sub px-6 text-center">
          <h1 className="font-display text-2xl font-bold text-primary-600">
            Something went wrong.
          </h1>
          <p className="max-w-sm text-[15px] text-ink-muted">
            Please refresh the page. If the problem continues, call us
            directly and we'll help right away.
          </p>
          <div className="flex gap-3">
            <ButtonLink href="/" variant="primary" size="md">
              Back to Homepage
            </ButtonLink>
            <ButtonLink href="tel:+911414000000" variant="outline" size="md">
              Call Us
            </ButtonLink>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
