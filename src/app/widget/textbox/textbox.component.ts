import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() label = "aa";
  @Input() type = "text";
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }
  handelInputChange(e) {

    this.onChange.emit(e.target.value)
  }


}
