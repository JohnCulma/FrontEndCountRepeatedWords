import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFrm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['',Validators.required]
  });
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("on submit")
  }

}
