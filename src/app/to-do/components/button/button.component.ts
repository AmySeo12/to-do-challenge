import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() onEvent: EventEmitter<boolean> = new EventEmitter();
  @Input() nameEvent:string = null;
  @Input() fullWidth:boolean = false;
  @Input() disabled:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  eventClick() {
    this.onEvent.emit(true);
  }
}
