
import "./globals.css";
import '@mantine/core/styles.css';
import ClientProviders from './ClientProvider';


export const metadata = {
  title: "Kreatr",
  description: "Kreatr Website description",
};
// const theme = createTheme({
//   colors: {
//     gray:["#f5f5f5",
//     "#e7e7e7",
//     "#cdcdcd",
//     "#b2b2b2",
//     "#9a9a9a",
//     "#8b8b8b",
//     "#848484",
//     "#717171",
//     "#656565",
//     "#000000"]
//   },
//   primaryColor:'gray',
//   primaryShade:{light:9,dark:1}
// });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='bg-img md:min-h-[100vh] xl:min-h-[100vh]'>
        
       
        <ClientProviders>
        {children}
        
        </ClientProviders>
        
        </body>
      
    </html>
  );
}
