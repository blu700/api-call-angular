import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialTable} from './components/material-table/material-table.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewUserComponent } from './components/forms/new-user/new-user.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';


const routes: Routes = [
  {path: 'users' , component: MaterialTable},
  {path: 'users/edit/:id', component: EditUserComponent},
  {path: 'users/new', component: NewUserComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: '**', redirectTo: 'users', pathMatch: 'full'}, //page not found component || soon.
  
]


@NgModule({
  declarations: [
    AppComponent,
    MaterialTable,
    NewUserComponent,
    EditUserComponent,
  ],
  imports: [
    
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatRippleModule,
    MatFormFieldModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }

/* 
 * imported manually as needed
 * this is a list of possible modules 
 * for matrial table.
 */

/*import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';*/ 

