import { Component } from '@angular/core';
import { ObMasterLayoutConfig } from '@oblique/oblique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly config: ObMasterLayoutConfig) {
    // config.header.isCustom = true;
    // config.footer.isCustom = true;
  }
  title = 'obliguetest';
}
