
import "./globals.css";
import { MantineProvider } from "@mantine/core";



export const metadata = {
  title: "Kreatr",
  description: "Kreatr Website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><MantineProvider>{children}</MantineProvider></body>
    </html>
  );
}
