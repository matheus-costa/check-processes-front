import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private notification: NzNotificationService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [0, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  save() {
    let user: User = this.userForm.value;
    this.userService.save(user).subscribe((user) => {
      this.router.navigateByUrl('/user');
      this.notification.create(
        'success',
        'EBA! Tudo certo',
        'O Usuário foi salvo com sucesso.'
      );
    });
  }

}
