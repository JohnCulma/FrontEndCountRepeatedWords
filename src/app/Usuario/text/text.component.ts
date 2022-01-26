import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  
  public textFrm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['',Validators.required]
  });
  constructor(private RestService:RestService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

public sendData(){
  // this.RestService.get('https://localhost:44350/api/TextCount', this.form.Value
}

}
