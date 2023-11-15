import "@styles/globals.css";

export const metadata = {
  title: "Layout",
  description: "This is the layout component",
  tags: ["layout", "component"],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app" id="app">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
