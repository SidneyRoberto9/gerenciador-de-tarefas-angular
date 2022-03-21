export class Tarefa {
  constructor(
    public id?: number,
    public nome?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public concluida?: boolean
  ) {}
}
