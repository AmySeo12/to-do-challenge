import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() tarea: string = '';
  @Input() id: number = 0;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  estado = false;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTarea() {
    this.delete.emit(this.id);
  }

}
