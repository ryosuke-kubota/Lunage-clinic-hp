"use client";

interface ClientBodyProps {
  children: React.ReactNode;
}

export default function ClientBody({ children }: ClientBodyProps) {
  return (
    <body suppressHydrationWarning className="antialiased font-shippori">
      {children}
    </body>
  );
}
