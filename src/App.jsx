import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 mb:flex-wrap">
        {/* <LeftSide /> */}
        {/* <Visualisation /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
