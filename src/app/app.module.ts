import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BaseInputComponent} from './base-input/base-input.component';
import {TreeViewComponent} from './tree-view/tree-view.component';
import {TreeNodeComponent} from './tree-node/tree-node.component';
import {TreeCoreComponent} from './tree-core/tree-core.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseInputComponent,
    TreeViewComponent,
    TreeNodeComponent,
    TreeCoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl-PL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
