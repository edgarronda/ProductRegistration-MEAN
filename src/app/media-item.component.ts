import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() productItem;
  @Output() delete = new EventEmitter();

  onRegister(){
    console.log("Test Registration");
  }
  onDelete(){
    console.log("Test Remove");
    this.delete.emit(this.productItem);
  }
}
