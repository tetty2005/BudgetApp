import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { CategoryListComponent } from './category-list/category-list.component';
import { DynamicMonthComponent } from './dynamic-month/dynamic-month.component';
import { StaticCategoryComponent } from './static-category/static-category.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category-list/category/category.component';
import { EditCategoryComponent } from './category-list/category/edit-category/edit-category.component';
import { BudgetComponent } from './budget/budget.component';
import { CategoryBudgetComponent } from './budget/category-budget/category-budget.component';

const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'budget', component: BudgetComponent },
    { path: 'statistics', component: StaticCategoryComponent },
    { path: 'dynamics', component: DynamicMonthComponent },
    { path: 'categories/:id', component: EditCategoryComponent },
    { path: '',  redirectTo: '/categories', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    LoginComponent,
    CategoryComponent,
    EditCategoryComponent,
    BudgetComponent,
    CategoryListComponent,
    DynamicMonthComponent,
    StaticCategoryComponent,
    CategoryBudgetComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {

}
