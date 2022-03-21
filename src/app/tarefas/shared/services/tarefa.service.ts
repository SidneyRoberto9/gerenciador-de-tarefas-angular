import { Injectable } from '@angular/core';

import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor() {}

  listarTodos(): Tarefa[] {
    let tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    let tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefa.createdAt = new Date();
    tarefa.updatedAt = tarefa.createdAt;
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  buscarPorId(id: number): Tarefa {
    let tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((tar, i, tars) => {
      if (tarefa.id === tar.id) {
        tarefa.updatedAt = new Date();
        tars[i] = tarefa;
      }
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  alterarStatus(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((tarefa) => {
      if (tarefa.id === id) {
        tarefa.concluida = !tarefa.concluida;
      }
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
}
