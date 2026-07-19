import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-card hover:-translate-y-0.5",
        secondary:
          "bg-secondary-600 text-white hover:bg-secondary-700 shadow-soft hover:shadow-card hover:-translate-y-0.5",
        outline:
          "border border-primary-600/20 text-primary-600 hover:bg-primary-50 hover:border-primary-600/40",
        ghost: "text-primary-600 hover:bg-primary-50",
        emergency:
          "bg-accent-600 text-white hover:bg-accent-600/90 shadow-[0_0_0_0_rgba(34,197,94,0.45)] hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[15px]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

// For CTAs that should render as <a> (tel:, mailto:, #anchors, external) while keeping
// identical styling. Internal paths (starting with a single "/") render as a router Link
// instead, so in-app navigation never triggers a full page reload.
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, href = "", children, ...props }, ref) => {
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (isInternal) {
      return (
        <Link
          ref={ref}
          to={href}
          className={cn(buttonVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);
ButtonLink.displayName = "ButtonLink";
