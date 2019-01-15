export interface ICategory {
  id: string;
  icon: string;
  name: string;
  monthBudget: number;
  popularSum: number;

  set(data);
  get();
}
