import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Investors } from "./components/Investors";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Investors />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}