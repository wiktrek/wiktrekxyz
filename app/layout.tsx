import '../styles/globals.css';
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth scrollbar-none">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
