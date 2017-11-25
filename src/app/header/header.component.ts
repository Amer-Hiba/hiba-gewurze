import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { 

  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    console.log ('switch language', language)
    this.translate.use(language);
  }

}
