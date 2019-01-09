import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CategoryService} from './category.service';
import {UserCategoryService} from './user-category.service';
import {Category} from '../Models/Category';
import {Observable} from 'rxjs';
import {Month} from '../Models/Month';
import {MonthCategory} from '../Models/MonthCategory';

@Injectable({
  providedIn: 'root',
})
export class MonthCategoryService extends CategoryService<MonthCategory> {
  private month: Month;

  constructor(private authService: AuthService,
              private userCategoryService: UserCategoryService) {
    super(MonthCategory);
  }

  setMonth(month: Month) {
    this.month = month;
  }

  getCollectionUrl() {
    if (!this.collectionUrl) {
      const user = this.authService.getUser();

      this.collectionUrl = 'Users/' + user.id + '/' + this.month.id;
    }

    return this.collectionUrl;
  }

  getAvailable(): Observable<Category[]> {
    return Observable.create((observer) => {
      this.getAll().subscribe((monthCategories: MonthCategory[]) => {
        this.userCategoryService.getAll().subscribe((userCategories: Category[]) => {
          const available = userCategories.filter((userCategory) => {
            return !monthCategories.find((monthCategory) => monthCategory.categoryId === userCategory.id);
          });

          observer.next(available);
        });
      });
    });
  }
}
