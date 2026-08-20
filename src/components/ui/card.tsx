import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

export interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  outerClassName?: string;
  innerClassName?: string;
}

export const DoubleBezelCard = React.forwardRef<HTMLDivElement, DoubleBezelCardProps>(
  ({ children, className, outerClassName, innerClassName, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand-blue-300",
          outerClassName,
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm overflow-hidden h-full",
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);
DoubleBezelCard.displayName = "DoubleBezelCard";
