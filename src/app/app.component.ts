import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day2';
  name = "";
  email = "";
  password = "";
  myDetails = "";
  myTextBox = "sample";
  handelNameInput(e) {

    this.name = e
  }
  handelEmailInput(e) {

    this.email = e
  }
  handelPasswordInput(e) {

    this.password = e
  }

  hadelClick() {

    this.myDetails = `Name:${this.name},  email: ${this.email} , password: ${this.password}`
    console.log(this.myDetails)
  }



  // textBoxes = [
  //   "Text Box 1",
  //   "Text Box 2",
  //   "Text Box 3"
  // ]


  textBoxes = [
    { name: "Teaxt box 1", id: 1 },
    { name: "Teaxt box 2", id: 2 },
    { name: "Teaxt box 3", id: 3 },
    { name: "Teaxt box 4", id: 4 },
  ]
  ckeckedList = [];
  showCheckitem = false;
  OnItemChange(e) {
    alert(e)
    if (e.isChecked) {

      this.ckeckedList.push(e)
    } else {
      this.ckeckedList = this.ckeckedList.filter(item => item.id !== e.id)
    }
  }

  onListChecked(e) {
    this.showCheckitem = e.isChecked
  }


  cardList = [];
  cards = [
    { title: "A", content: "con1", id: 1 },
    { title: "b", content: "con2", id: 2 },
    { title: "c", content: "con3", id: 4 },
    { title: "d", content: "con4", id: 5 },
    { title: "e", content: "con5", id: 6 }

  ]

  handelclick(e) {

    this.cardList.push(e)
    console.log(this.cardList)

  }
}