import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { AdminRegService } from '../admin-reg.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.scss'],
})
export class AdminRegComponent implements OnInit {
  adminRegForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private router: Router,
    private adminRegService: AdminRegService
  ) {}

  ngOnInit() {
    this.adminRegForm = this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      emailId: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      contactNo: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    });
  }

  get f() {
    return this.adminRegForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.adminRegForm.invalid) {
      return this.notifyService.showError(
        'All fields are Mandatory',
        'Movie Plan'
      );
    }
  }

  adminReg() {
    const id = 0;
    const userName = this.adminRegForm.controls['userName'].value;
    const emailId = this.adminRegForm.controls['emailId'].value;
    const password = this.adminRegForm.controls['password'].value;
    const contactNo = this.adminRegForm.controls['contactNo'].value;
    const data: Admin = {
      id: id,
      userName: userName,
      emailId: emailId,
      password: password,
      contactNo: contactNo,
    };
    this.adminRegService.addAdmin(data).subscribe(
      (data: any) => {
        this.notifyService.showSuccess('You are Registered', 'Successfully');
        this.router.navigate(['/home']);
      },
      (err) => {
        if (this.adminRegForm.valid) {
          this.notifyService.showError(
            'You are already registered',
            'try again'
          );
          this.adminRegForm.reset();
        }
      }
    );
  }

  cancel() {
    this.notifyService.showWarn('You are not registered', 'cancelled');
    this.router.navigate(['/home']);
  }
}
