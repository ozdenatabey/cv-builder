import Header from "./component/Header";
import AboutMe from "./component/AboutMe";
import Experience from "./component/Experience";
import References from "./component/References";
import SideMenu from "./component/SideMenu";
import { useEffect, useRef, useState } from "react";

function App() {
  const [pageCount, setPageCount] = useState(1);
  const myRef = useRef();
  useEffect(() => {
    const element = myRef.current;
    const height = element.offsetHeight;
    const maxHeight = 1123;
    console.log(element);
    console.log("Yükseklik: ", height);
    if (height > maxHeight) {
      setPageCount(2);
      return;
    }
  }, [pageCount]);
  console.log("Sayfa sayısı:", pageCount);
  return (
    <div className="grid place-items-center bg-gray-500">
      <main id="page1" className="bg-base m-6 h-[297mm] w-[210mm]">
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
      </main>
      {pageCount === 2 && (
        <main
          id="page2"
          className="bg-primary mb-6 h-[297mm] w-[210mm] grid place-items-center"
        >
          <div className="bg-base w-[200mm] h-[287mm] rounded-lg">
            <References />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
