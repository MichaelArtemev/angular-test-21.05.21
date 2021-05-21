import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
//шаблон не делаю в отдельный файл потому-что мало кода
@Component({
  selector: 'app-button',  
  template: `
    <button #btnShared [ngClass]="btnClass">
      <ng-content></ng-content>
    </button>
  `,
})
//динамическая кнопка в зависимости от переданный параметров
export class ButtonComponent implements OnInit {

  @Input() flag: string | undefined;
  @ViewChild('btnShared', {static:true}) btnRef: ElementRef | undefined;
  public btnClass: any;

  constructor() { }

  ngOnInit() {
    if(this.flag === 'normal'){
      this.btnClass = 'btn-normal';
    }else if(this.flag === 'danger'){
      this.btnClass = 'btn-danger';
    }else if(this.flag === 'trans'){
      this.btnClass = 'btn-trans';
    }  
  }
}
