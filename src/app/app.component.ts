import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { transition } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app ... . works!';
  types: any[];
  rightSide: string[];
  leftSide: string[];
  browserLanguage: string;
  branches: any [];

  constructor(private translate: TranslateService, private http: Http) {
    let browserLang = translate.getBrowserLang()+'2';
    console.log ('rtretret', browserLang);
    if (['en', 'ar'].indexOf(browserLang) > -1) {
      translate.setDefaultLang(browserLang);
    }
    else {
      translate.setDefaultLang('ar');
      translate.use('ar');
    }

    this.getTypes()

    this.getBranches()

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getTypes()
    });
    
  }

  getTypes() {
        // get types data
        this.getJSON('assets/mockData/types.json')
        .subscribe(data => {
          this.types = data;
          
          this.leftSide = this.types.splice(0, Math.ceil(this.types.length/2)).map((value) => {
            if (this.translate.currentLang == 'ar'){
              return value.ar;
            }
            else {
              return value.en;
            }
          });
  
          this.rightSide = this.types.splice(0, this.types.length).map((value) => {
            if (this.translate.currentLang == 'ar'){
              return value.ar;
            }
            else {
              return value.en;
            }
          });
          
        }
          , error => console.log(error))
  }

  getBranches (){
     // get types data
     this.getJSON('assets/mockData/branches.json')
     .subscribe(data => {
       console.log ('DATA', data);
       this.branches = data
     }
       , error => console.log(error))
  }

  getJSON(file: string):  Observable<any> {
    return this.http.get(file)
                    .map((res:any) => res.json())
  }
}
