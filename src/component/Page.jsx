import SideMenu from "./SideMenu";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import References from "./References";
import Projects from "./Projects";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function Page({ language, myRef }) {
  const { color } = useSelector((state) => state.theme);
  return (
    <>
      <div className="space-y-6">
        <div
          id="page1"
          className={`bg-${color}-base h-[297mm] w-[210mm] shadow shadow-black overflow-hidden`}
        >
          <div className="flex">
            <div className="w-2/6">
              <SideMenu language={language} />
            </div>
            <div ref={myRef} className="w-4/6 p-4 space-y-6">
              <Header />
              <AboutMe language={language} />
              <Experience language={language} />
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
            <Projects language={language} />
            <References language={language} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
