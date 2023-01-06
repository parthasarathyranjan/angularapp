import { Component } from '@angular/core';

@Component({
  selector: 'app-createfile',
  templateUrl: './createfile.component.html',
  styleUrls: ['./createfile.component.css']
})
export class CreatefileComponent {

}
//this code is used to save & download the data you typed in the text box
// import { Component } from '@angular/core'
// import { saveAs } from 'file-saver'

// @Component({
//   selector: 'app-createfile',
//   templateUrl: './createfile.component.html',
//   styleUrls: ['./createfile.component.css']
// })
// export class CreatefileComponent  {
//   saveFile() {
//   const blob = new Blob(["textarea"], {type: "text/plain;charset=utf-8"});
//   saveAs(blob, "save-me.txt");
//   }
// }
