import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CategoryListComponent } from './category-list/category-list.component';
import { DynamicMonthComponent } from './dynamic-month/dynamic-month.component';
import { StaticCategoryComponent } from './static-category/static-category.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category-list/category/category.component';
import { EditCategoryComponent } from './category-list/category/edit-category/edit-category.component';
import { BudgetComponent } from './budget/budget.component';
import { CategoryBudgetComponent } from './budget/category-budget/category-budget.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { AuthGuard } from './services/auth-guard.service';
import { AddMonthCategoriesComponent } from './budget/add-month-categories/add-month-categories.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',  redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', canActivate: [AuthGuard], component: CategoryListComponent },
  { path: 'categories/:id', canActivate: [AuthGuard], component: EditCategoryComponent },
  { path: 'budget', canActivate: [AuthGuard], component: BudgetComponent },
  { path: 'budget/:monthId/add', canActivate: [AuthGuard], component: AddMonthCategoriesComponent },
  { path: 'statistics', canActivate: [AuthGuard], component: StaticCategoryComponent },
  { path: 'dynamics', canActivate: [AuthGuard], component: DynamicMonthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    EditCategoryComponent,
    BudgetComponent,
    CategoryListComponent,
    DynamicMonthComponent,
    StaticCategoryComponent,
    CategoryBudgetComponent,
    FirebaseComponent,
    AddMonthCategoriesComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
