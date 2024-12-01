import Navbar from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google";
import HomePage from "./homepage/HomePage";
import { GlobalProvider } from "@/Context/GlobalContext";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export default function Home() {
  return (
    <GlobalProvider>
      <main className={poppins.className}>
        <Navbar />
        <HomePage />
        <Footer />
      </main>
    </GlobalProvider>
  );
}
