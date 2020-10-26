import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title = "Card";
  @Input() content = "content";
  @Input() id = 0;
  @Output() onclick = new EventEmitter<object>();

  constructor() { }

  ngOnInit() { }

  handelLike(e) {
    this.onclick.emit({
      id: this.id,
      title: this.title,
      content: this.title,
    })

  }

}
