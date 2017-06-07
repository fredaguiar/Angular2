import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-upload-status-panel',
	templateUrl: './upload-status-panel.component.html',
	styleUrls: ['./upload-status-panel.component.css']
})
export class UploadStatusPanelComponent implements OnInit {


	public files = ['1111', '2222'];

	constructor() { }

	ngOnInit() {
	}

}
