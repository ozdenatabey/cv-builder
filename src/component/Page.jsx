import SideMenu from "./SideMenu";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import References from "./References";
import Projects from "./Projects";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function Page({ myRef }) {
  const { color } = useSelector((state) => state.theme);
  return (
    <>
      <div className="space-y-6 h-screen overflow-scroll">
        <div
          id="page1"
          className={`bg-${color}-base h-[297mm] w-[210mm] shadow shadow-black overflow-hidden`}
        >
          <div className="flex">
            <div className="w-2/6">
              <SideMenu />
            </div>
            <div ref={myRef} className="w-4/6 p-4 space-y-6">
              <Header />
              <AboutMe />
              <Experience />
            </div>
          </div>
        </div>
        <div
          id="page2"
          className={`bg-${color}-primary mb-6 h-[297mm] w-[210mm] grid place-items-center shadow shadow-black overflow-hidden`}
        >
          <div
            className={`bg-${color}-base w-[200mm] h-[287mm] rounded-lg p-4`}
          >
            <Projects />
            <References />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
