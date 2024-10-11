import { useEffect, useRef, useState } from "react";
import ColorPicker from "./component/ColorPicker";
import LanguageSelect from "./component/LanguageSelect";
import Form from "./component/Form";
import Page from "./component/Page";

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
          <div className="flex justify-center my-4">
            <button className="bg-neutral-700 text-white font-semibold text-lg w-36 py-3 rounded-lg hover:bg-neutral-800 active:scale-[0.97]">
              {language === "en" ? "Download" : "İndir"}
            </button>
          </div>
        </section>
        <section id="rightSide" className="w-3/5">
          <div className="grid place-items-center">
            <Page
              theme={selectedTheme}
              language={language}
              myRef={myRef}
              pageCount={pageCount}
            />
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
