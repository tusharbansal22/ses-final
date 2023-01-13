import React from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "./styles/mag.css"
import Navbar from "../components/Navbar";
import samplePDF from "../assets/magazine_pdf/mag.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const list=[];
for(var i=0;i<40;i++){
  list.push(i);
}

const width = 500;
const height = 624;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

function Mag() {
  return (
    <div>
    <Navbar/>
    <Document className="mag" file={samplePDF}>
      <HTMLFlipBook width={width} height={height}>
      {list.map(function(i,index){
        return <Page pageNumber={i+1} />
      })}
      </HTMLFlipBook>
    </Document>
    </div>
  );
}

export default Mag;
