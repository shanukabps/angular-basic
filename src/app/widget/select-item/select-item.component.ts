import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss']
})
export class SelectItemComponent implements OnInit {
  @Input() text = "item";
  @Input() id = "0";

  @Output() onChecked = new EventEmitter<object>();
  constructor() { }

  ngOnInit() { }


  onCheckChange(e) {

    this.onChecked.emit({
      isChecked: e.target.checked,
      text: this.text,
      id: this.id
    })

  }



}
