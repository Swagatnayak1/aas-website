// 'use client'
// import "./globals.css";import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts globally
// import { Provider } from "react-redux";
// import store from "@/redux/store";
// export default function RootLayout({ children }) {

//   return (
//     <html lang="en">
//       <body
       
//       >
        

              
//         <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeButton />
//            <Provider store={store} >
//               {children}
//             </Provider>  
           
        
//       </body>
//     </html>
//   );
// }

//'use client';
import "./globals.css";
export const metadata = {
  title: "AAS Information Technology | Innovative IT Solutions",
  description: "AAS Information Technology delivers cutting-edge software solutions, web development, and IT consulting services tailored to drive business success.",
  keywords: "IT solutions, software development, web development, IT consulting, AAS Information Technology",
  author: "AAS Information Technology"
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
     
      >
        {children}
      </body>
    </html>
  );
}