import { useEffect, useRef, useState } from "react";
import ColorPicker from "./component/ColorPicker";
import LanguageSelect from "./component/LanguageSelect";
import Form from "./component/Form";
import Page from "./component/Page";
import { useReactToPrint } from "react-to-print";
import { FaFileDownload } from "react-icons/fa";
import TranslateButton from "./component/inputs/TranslateButton";

function App() {
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
    <div className="bg-gray-50">
      <div className="flex justify-evenly items-center w-full shadow-lg bg-gray-50 z-10 mb-6 sticky top-0">
        <div className="flex justify-center items-center space-x-6">
          <LanguageSelect />
          <FaFileDownload
            onClick={reactToPrintFn}
            className="size-8 text-emerald-800 hover:translate-y-1 duration-200 transition-all hover:text-emerald-600 hover:cursor-pointer"
          />
        </div>
        <div>
          <TranslateButton />
        </div>
        <ColorPicker />
      </div>
      <main className="flex justify-evenly">
        <section id="leftSide" className="w-2/5">
          <Form />
        </section>
        <section id="rightSide">
          <div ref={pageRef} className="grid place-items-center">
            <Page myRef={myRef} pageCount={pageCount} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
