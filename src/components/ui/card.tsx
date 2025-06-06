// Simple utility function - no external dependencies needed
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-lg border bg-white text-gray-900 shadow-sm",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ className, children, ...props }: CardProps) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {children}
  </div>
);

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = ({ className, children, ...props }: CardTitleProps) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = ({ className, children, ...props }: CardDescriptionProps) => (
  <p
    className={cn("text-sm text-gray-600", className)}
    {...props}
  >
    {children}
  </p>
);

const CardContent = ({ className, children, ...props }: CardProps) => (
  <div 
    className={cn("p-6 pt-0", className)} 
    {...props}
  >
    {children}
  </div>
);

const CardFooter = ({ className, children, ...props }: CardProps) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  >
    {children}
  </div>
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };