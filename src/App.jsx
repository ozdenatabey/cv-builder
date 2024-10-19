import { useEffect, useRef, useState } from "react";
import ColorPicker from "./component/ColorPicker";
import LanguageSelect from "./component/LanguageSelect";
import Form from "./component/Form";
import Page from "./component/Page";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";

function App() {
  const { color, language } = useSelector((state) => state.theme);
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

  // PDF OLARAK İNDİRME
  const pageRef = useRef();
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const reactToPrintFn = useReactToPrint({
    contentRef: pageRef,
    documentTitle: `CV-${day}.${month}.${year}`,
  });

  return (
    <div className="bg-gray-100">
      <div className="flex justify-evenly items-center">
        <button
          onClick={reactToPrintFn}
          className={`bg-${color}-primary text-white font-semibold text-lg w-36 py-3 rounded-lg hover:shadow-lg hover:shadow-black/50 active:scale-[0.97]`}
        >
          {language === "en" ? "Download" : "İndir"}
        </button>
        <ColorPicker />
        <LanguageSelect />
      </div>
      <main className=" flex justify-between">
        <section id="leftSide" className="w-2/5">
          <Form />
        </section>
        <section id="rightSide" className="w-3/5">
          <div ref={pageRef} className="grid place-items-center">
            <Page myRef={myRef} pageCount={pageCount} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
