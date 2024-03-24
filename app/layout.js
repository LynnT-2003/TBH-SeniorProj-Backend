// // RootLayout.js
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "TBH-ChatBot Essentials",
//   description:
//     "A web application for controlling, updating, and maintaining the backend data for TBH-Chatbot",
// };

// export default function RootLayout({ children, showNavbar = true }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="max-w-3xl mx-auto p-4">
//           {showNavbar && <Navbar />}
//           <div className="mt-8">{children}</div>
//         </div>
//       </body>
//     </html>
//   );
// }

// RootLayout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, showNavbar = false }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          {showNavbar && <Navbar />}
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
