export class Spending {
  public sum: number;
  public comment: string;

  constructor(data?: Partial<Spending>) {
    Object.assign(this, data);
  }
}
