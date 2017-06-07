import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user = new User("fred.aguiar.teixeira@gmail.com", "none");

	


	constructor() { }

	ngOnInit() {

	}

	submitForm(value: any) {
		alert(JSON.stringify(value));

	}


}
