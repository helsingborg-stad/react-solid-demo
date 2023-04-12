export const metadata = {
  title: "SOLID React Services Example",
  description: "Example showcasing how to implement SOLID services in React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#2e3440",
          color: "#eceff4",
          fontFamily: "sans-serif",
          fontSize: 14,
        }}
      >
        {children}
      </body>
    </html>
  );
}
