import {Component} from '@angular/core';
import {ObMasterLayoutConfig, ObMasterLayoutService} from '@oblique/oblique';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private readonly masterLayout: ObMasterLayoutService) {
		// config.header.isCustom = true;
		// config.footer.isCustom = true;
		masterLayout.layout.isFixed = true;
	}
	title = 'obliguetest';
}
