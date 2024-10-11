import SideMenu from "./SideMenu";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import References from "./References";

// eslint-disable-next-line react/prop-types
function Page({ theme, language, myRef, pageCount }) {
  return (
    <>
      <div
        id="page1"
        className={`bg-${theme}-base m-6 h-[297mm] w-[210mm] border-2 border-black rounded-lg overflow-hidden`}
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
      {pageCount === 2 && (
        <div
          id="page2"
          className={`bg-${theme}-primary mb-6 h-[297mm] w-[210mm] grid place-items-center border-2 border-black rounded-lg overflow-hidden`}
        >
          <div className={`bg-${theme}-base w-[200mm] h-[287mm] rounded-lg`}>
            <References />
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
