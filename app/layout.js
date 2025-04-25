// import { GoogleTagManager } from "@next/third-parties/google";
// import { Inter } from "next/font/google";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "./components/footer";
// import ScrollToTop from "./components/helper/scroll-to-top";
// import Navbar from "./components/navbar";
// import "./css/card.scss";
// import "./css/globals.scss";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Portfolio of Abu Said - Software Developer",
//   description:
//     "This is the portfolio of Abu Said. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ToastContainer />
//         <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
//           <Navbar />
//           {children}
//           <ScrollToTop />
//         </main>
//         <Footer />
//       </body>
//       <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
//     </html>
//   );
// }
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Pancham Kumar - Software Developer",
  description:
    "Welcome to the portfolio of Pancham Kumar. I am a software developer passionate about problem-solving and creating innovative solutions. With experience in full-stack development and cloud technologies, I aim to make impactful contributions to tech projects. I enjoy working with JavaScript and love exploring new tech stacks.",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>P</text></svg>',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
