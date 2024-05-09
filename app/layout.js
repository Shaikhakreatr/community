
import "./globals.css";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import '@mantine/core/styles.css';



export const metadata = {
  title: "Kreatr",
  description: "Kreatr Website description",
};
const theme = createTheme({
  colors: {
    primaryColor: ['#000000'],
    black:['#000000'],
  },
  

});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='bg-img md:min-h-[100vh] xl:min-h-[100vh]'><MantineProvider theme={theme}  >{children}</MantineProvider></body>
    </html>
  );
}
