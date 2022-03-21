import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefasComponent } from './components';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListarTarefasComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [TarefaService],
})
export class TarefasModule {}
