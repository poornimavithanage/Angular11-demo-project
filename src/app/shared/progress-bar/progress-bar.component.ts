import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'em-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress = 0;
  @Input() firstName = '';
  @Output() progressClick: EventEmitter<string> = new EventEmitter<string>();
  color = '';
  constructor() { }

  ngOnInit(): void {
    if (this.progress < 0 || this.progress > 100){
    this.progress = 0;
    }

    if (this.progress < 35){
      this.color = 'red';
    }else if (this.progress < 75){
      this.color = 'yellow';
    }else {
      this.color = 'green';
    }
  }

  // tslint:disable-next-line:typedef
  onClick(){
this.progressClick.emit(` ${this.firstName}'s Progress is ${this.progress} % `);
  }

}
