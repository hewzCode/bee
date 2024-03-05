export const metadata = {
    title: "Weee",
    description: "eeeeeee",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }