import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RichTextEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
