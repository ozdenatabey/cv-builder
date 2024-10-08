import Header from "./component/Header";
import AboutMe from "./component/AboutMe";
import Experience from "./component/Experience";
import References from "./component/References";
import SideMenu from "./component/SideMenu";
import { useEffect, useRef, useState } from "react";
import ColorPicker from "./component/ColorPicker";
import LanguageSelect from "./component/LanguageSelect";
import Form from "./component/Form";

function App() {
  // DİL SEÇİMİ
  const [language, setLanguage] = useState("tr");
  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
  };
  // TEMA SEÇİMİ
  const [selectedTheme, setSelectedTheme] = useState("color1");
  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };
  // SAYFA YÜKSEKLİK HESABI VE İKİNCİ SAYFAYI OTOMATİK OLUŞTURMA
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
  return (
    <body className="bg-gray-100">
      <div className="absolute right-10 top-4">
        <LanguageSelect onClick={handleLanguageSelect} />
      </div>
      <div className="grid place-content-center">
        <ColorPicker onThemeSelect={handleThemeSelect} language={language} />
      </div>
      <main className=" flex justify-between">
        <section id="leftSide" className="w-2/5">
          <Form theme={selectedTheme} language={language} />
        </section>
        <section id="rightSide" className="w-3/5">
          <div className="grid place-items-center">
            <div
              id="page1"
              className={`bg-${selectedTheme}-base m-6 h-[297mm] w-[210mm] border-2 border-black rounded-lg overflow-hidden`}
            >
              <div className="flex">
                <div className="w-2/6">
                  <SideMenu theme={selectedTheme} language={language} />
                </div>
                <div ref={myRef} className="w-4/6 p-4 space-y-6">
                  <Header theme={selectedTheme} />
                  <AboutMe theme={selectedTheme} language={language} />
                  <Experience theme={selectedTheme} language={language} />
                </div>
              </div>
            </div>
            {pageCount === 2 && (
              <div
                id="page2"
                className={`bg-${selectedTheme}-primary mb-6 h-[297mm] w-[210mm] grid place-items-center border-2 border-black rounded-lg overflow-hidden`}
              >
                <div
                  className={`bg-${selectedTheme}-base w-[200mm] h-[287mm] rounded-lg`}
                >
                  <References />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
