import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  listProcesses: Process[];
  processStatusBr = {'OPEN': 'EM ABERTO', 'PAUSED': 'PAUSADO', 'CLOSED': 'CONCLUIDO'};
  constructor(
    private processService: ProcessService
  ) { }

  ngOnInit(): void {
    this.processService.list().subscribe(processes => {
      this.listProcesses = processes;
    });
  }

}
