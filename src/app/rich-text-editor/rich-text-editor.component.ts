import { Component, OnInit, ViewEncapsulation, VERSION, Input,ElementRef,ViewChild } from '@angular/core';
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";
import * as quill from 'quill';
const Quill = quill as any;
//import Quill from 'quill';
//declare let Quill;

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RichTextEditorComponent implements OnInit {
  @ViewChild("editor", {static: true}) element!: ElementRef;

  name = "Angular " + VERSION.major;

  teste = 'ola ';

  saveData = '';

  //public modules = {} ;
  public modules: any;
  public quillInstance: any;
  private quillToWordConfig: quillToWord.Config = {
    exportAs: "blob"
  };
  // export word
  public async exportWord() {
    //const delta = this.quillInstance.getContents();
    const delta = this.quillInstance.getContents();
    const blob = await quillToWord.generateWord(delta, this.quillToWordConfig)
    saveAs(blob as Blob, "word-export.docx");
  }



  private setUpQuill() {
    this.quillInstance = new Quill(this.element.nativeElement, {
      theme: "snow",
      modules: {
        //table: true,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          //[{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button
          ['table', 'column-left', 'column-right', 'row-above', 'row-below', 'row-remove', 'column-remove'],


          ['link', 'image', 'video'],                       // link and image, video
        ]
      }

    });
    //  this.quillInstance = new Quill("#editor", {
    //   theme: "snow",

    //   table: false,
    //   toolbar: [
    //     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //     ['blockquote', 'code-block'],

    //     //[{ 'header': 1 }, { 'header': 2 }],               // custom button values
    //     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //     [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //     [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //     [{ 'direction': 'rtl' }],                         // text direction

    //     [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    //     [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //     [{ 'font': [] }],
    //     [{ 'align': [] }],

    //     ['clean'],                                         // remove formatting button
    //   // ['table', 'column-left', 'column-right', 'row-above', 'row-below', 'row-remove', 'column-remove'],


    //    ['link', 'image', 'video'],                       // link and image, video
    //   ]
    //  });
  }


  //table = this.quill.getModule('table');


  constructor() { }


  /*private quillToWordConfig: quillToWord.Config = {
    exportAs: "blob"
  };*/

  /* public async exportWord() {
     const delta = this.quillInstance.getContents();
     const blob = await quillToWord.generateWord(delta);
     saveAs(blob as Blob, "word-export.docx");
    // const blob = await quillToWord.generateWord(delta, this.quillToWordConfig);
     //saveAs(blob , "word-export.docx");
     // saveAs(blob, "word-export.docx");
   }
 */


  ngOnInit(): void {
    // setTimeout(() => this.setUpQuill(), 2500);
    this.setUpQuill();
    //this.quillInstance.setContents(this.teste);
  }

  salvar() {
    this.saveData = this.teste;
    let content = this.quillInstance.getContents();
    let str = JSON.stringify(content, null, 2);

    this.saveData = str;
  }

}
