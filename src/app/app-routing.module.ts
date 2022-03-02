import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'rich-text-editor', component: RichTextEditorComponent },
  { path: '', redirectTo: 'rich-text-editor', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
