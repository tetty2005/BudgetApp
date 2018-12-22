import {Injectable} from '@angular/core';
import {User} from '../Models/UserModel';
import {CategoryModel} from '../Models/CategoryModel';
import {FirebaseService} from './firebase.service';
import {DefaultCategoryService} from './default-category.service';
import {UserCategoryService} from './user-category.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends FirebaseService {
  constructor(private defaultCategoryService: DefaultCategoryService,
              private userCategoryService: UserCategoryService) {
    super();
  }

  init(user: User) {
    return new Promise((resolve, reject) => {
      const docRef =  this.getDb().collection('Users').doc(user.id);

      docRef.get().then((doc) => {
        if (doc.exists) {
          resolve();
        } else {
          docRef.set({email: user.email, name: user.name});
          this.defaultCategoryService.getAll().subscribe((categories: CategoryModel[]) => {
            this.userCategoryService.createMany(categories).subscribe(() => resolve());
          });
        }
      }).catch(reject);
    });
  }
}
