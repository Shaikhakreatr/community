
import "./globals.css";
import { MantineProvider } from "@mantine/core";



export const metadata = {
  title: "Kreatr",
  description: "Kreatr Website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='bg-img md:min-h-[100vh] xl:min-h-[100vh]'><MantineProvider>{children}</MantineProvider></body>
    </html>
  );
}
