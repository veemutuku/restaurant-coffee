import { Component , OnInit} from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {


  login: FormGroup;

  ngOnInit(){

    this.login= new FormGroup({
      firstname: new FormControl(null,Validators.required ),
      lastname: new FormControl(null,Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
      
    });


  }
  onSubmit(){
    console.log(this.login.value);

  }



}

