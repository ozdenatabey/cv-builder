import SideMenu from "./SideMenu";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import References from "./References";
import Projects from "./Projects";

// eslint-disable-next-line react/prop-types
function Page({ theme, language, myRef, pageCount }) {
  return (
    <>
      <div className="space-y-6">
        <div
          id="page1"
          className={`bg-${theme}-base h-[297mm] w-[210mm] shadow shadow-black overflow-hidden`}
        >
          <div className="flex">
            <div className="w-2/6">
              <SideMenu theme={theme} language={language} />
            </div>
            <div ref={myRef} className="w-4/6 p-4 space-y-6">
              <Header theme={theme} />
              <AboutMe theme={theme} language={language} />
              <Experience theme={theme} language={language} />
            </div>
          </div>
        </div>
        {/* {pageCount === 2 && ( */}
        <div
          id="page2"
          className={`bg-${theme}-primary mb-6 h-[297mm] w-[210mm] grid place-items-center shadow shadow-black overflow-hidden`}
        >
          <div
            className={`bg-${theme}-base w-[200mm] h-[287mm] rounded-lg p-4`}
          >
            <Projects theme={theme} language={language} />
            <References theme={theme} language={language} />
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
}

export default Page;
