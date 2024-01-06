import "./App.css";
import {
  Header,
  HomeSection,
  AboutSection,
  ProgresBar,
  ProductSection,
} from "./components/";
import { useScrollCustom } from "./hooks/hooks";

function App() {

  const {scrollPosition, scrollPercentage} = useScrollCustom();

  const products = [
    {
      name: "Salmon",
      price: 120,
      introText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti!",
    },
    {
      name: "Snapper",
      price: 120,
      introText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti!",
    },
    {
      name: "Swordfish",
      price: 120,
      introText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti!",
    },
    {
      name: "Tuna",
      price: 120,
      introText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti!",
    },
  ];

  return (
    <>
      <Header />
      <section id="home">
        <HomeSection position={scrollPosition} />
      </section>
      <section id="about">
        <AboutSection position={scrollPosition} />
      </section>
      <ProgresBar position={scrollPosition} sPercentage={scrollPercentage} />
      <ProductSection products={products} />
    </>
  );
}

export default App;
