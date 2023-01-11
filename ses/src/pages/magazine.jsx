import React , { Component, useState } from "react";
import Navbar from "../components/Navbar";
import { Document, Page, pdfjs } from 'react-pdf';
import samplePDF from '../assets/magazine_pdf/mag.pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Magazine extends Component{
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
      <Navbar />
        <Document
          file='../assets/magazine_pdf/mag.pdf'
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default Magazine;