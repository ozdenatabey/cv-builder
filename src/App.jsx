import Header from "./component/Header";
import AboutMe from "./component/AboutMe";
import Experience from "./component/Experience";
import References from "./component/References";
import SideMenu from "./component/SideMenu";

function App() {
  return (
    <div className="grid place-items-center bg-gray-500">
      <main id="page1" className="bg-base m-6 h-[297mm] w-[210mm]">
        <div className="flex">
          <div className="w-2/6">
            <SideMenu />
          </div>
          <div className="w-4/6 p-4 space-y-6">
            <Header />
            <AboutMe />
            <Experience />
          </div>
        </div>
      </main>
      <main
        id="page2"
        className="bg-primary mb-6 h-[297mm] w-[210mm] grid place-items-center"
      >
        <div className="bg-base w-[200mm] h-[287mm] rounded-lg">
          <References />
        </div>
      </main>
    </div>
  );
}

export default App;
