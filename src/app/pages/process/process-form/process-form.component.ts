import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProcessService } from 'src/app/services/process.service';
import { Process } from 'src/app/models/process.model';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.scss']
})
export class ProcessFormComponent implements OnInit {
  processForm: FormGroup;
  constructor(
    private notification: NzNotificationService,
    private processService: ProcessService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.processForm = this.fb.group({
      id: [0, [Validators.required]],
      code: [null, [Validators.required]],
      type: [null, [Validators.required]],
      interested: [null, [Validators.required]],
      registerDate: [null, [Validators.required]],
      urlQuery: [null, [Validators.required]],
      status: [null, [Validators.required]],
      lastDocument: [null, []],
    });

    const processId = this.activatedRoute.snapshot.paramMap.get('id');
    if (processId)
      this.loadProcess(processId)
  }


  save() {
    let process: Process = this.processForm.value;
    process.registerDate = new Date(process.registerDate);
    process.code = process.code.replace(/ /g, "");
    
    this.processService.save(process).subscribe((process) => {
      this.router.navigateByUrl('/process');
      this.notification.create(
        'success',
        'EBA! Tudo certo',
        'O Processo foi salvo com sucesso.'
      );
    }, (error) => {
      this.notification.create(
        'error',
        'OPS! Algo deu errado',
        'Infelizmente o Processo não pode ser salvo.'
      );
    });
  }

  private loadProcess(processId) {
    this.processService.find(processId).subscribe(process => {
      if(process){
        Object.keys(process).forEach((key) => {
          if (this.processForm.controls[key])
            this.processForm.controls[key].setValue(process[key]);
        });
      }
    });
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
}
