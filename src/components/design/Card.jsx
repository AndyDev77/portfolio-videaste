import React from "react";

const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-[30px] border bg-background text-card-foreground overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

export default Card;
