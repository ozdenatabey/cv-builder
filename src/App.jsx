import Header from "./component/Header";
import AboutMe from "./component/AboutMe";
import Experience from "./component/Experience";
import References from "./component/References";
import SideMenu from "./component/SideMenu";

function App() {
  return (
    <div className="bg-blue-300">
      <div id="page1" className="bg-base m-auto h-[297mm] w-[210mm] mb-5">
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
      </div>
      <div id="page2" className="bg-white m-auto h-[297mm] w-[210mm]">
        <References />
      </div>
    </div>
  );
}

export default App;
