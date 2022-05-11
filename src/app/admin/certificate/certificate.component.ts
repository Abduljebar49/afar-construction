import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  dataUrl: any;
  data: any;
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.dataUrl = window.location.origin + '/#/facility/view/1';
  }

  public async captureScreen(print) {
    // const data = document.getElementById("certificateBody");
    // html2canvas(data).then(canvas => {
    // 	const contentDataURL = canvas.toDataURL("image/png");
    // 	const pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
    // 	const width = pdf.internal.pageSize.getWidth();
    // 	const height = pdf.internal.pageSize.getHeight();
    // 	const position = 0;
    // 	pdf.addImage(contentDataURL, "PNG", 0, position, width, height);
    // 	pdf.save("MYPdf.pdf"); // Generated PDF
    // });
    this.spinner.show();
    var scaleBy = 5;
    var w = 1000;
    var h = 1000;
    var div = document.querySelector('#screen');
    var canvas = document.createElement('canvas');
    // canvas.width = w * scaleBy;
    // canvas.height = h * scaleBy;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    var context = canvas.getContext('2d');
    // context.scale(scaleBy, scaleBy);
    await html2canvas(document.getElementById('certificateBody')!, {
      scale: 2,
      // dpi: 144,
      // useCORS: true,
      // allowTaint: true,
      // letterRendering: true,
      // canvas: canvas
    })
      .then(function (canvas) {
        // this.spinner.hide();
        console.log('inside rendering');
        const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
        // canvas.webkitImageSmoothingEnabled = false;
        // canvas.mozImageSmoothingEnabled = false;
        // canvas.imageSmoothingEnabled = false;
        const contentDataURL = canvas.toDataURL('image/png');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
        pdf.save('MYPdf.pdf'); // Generated PDF
      })
      .catch(function (err) {
        console.log('canvas error', err);
      });
    this.spinner.hide();
  }

  emitPrintAction() {
    const printContents = document.getElementById('certificateBody')!.innerHTML;
    const popupWin = window.open(
      '',
      '_blank',
      'width=' + screen.width + ',height=' + screen.height
    );
    popupWin!.document.open();

    popupWin!.document.write(
      '<html><head> <link rel="stylesheet" type="text/css" href="assets/styles/common.styles.css" />' +
        '<link rel="stylesheet" type="text/css" href="assets/styles/imports/_typography.css" />' +
        '<link href="/node_modules/bootstrap/dist/css/bootstrap.css">' +
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">' +
        '<style type="text/css" media="print"> @page {\n' +
        '    size: auto;\n' +
        '    margin: 0;\n' +
        '}\n' +
        'body { margin: 1.2cm; }\n' +
        '</style>' +
        '</head><body style="overflow:visible;" onload="window.print()"> ' +
        '<style>@page { size: auto;  margin-top: 4mm; margin-right: 5mm}</style>' +
        printContents +
        '' +
        '<script src="https://paul.kinlan.me/ad-inject.js"></script>' +
        '</body></html>'
    );
    popupWin!.document.close();
  }

}
