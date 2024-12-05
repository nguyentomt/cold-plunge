'use client'
import { pdfjs } from "react-pdf";


const WhitePaper = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url,).toString();

    return (
        <div>
            haha
        </div>
    )
}

export default WhitePaper;