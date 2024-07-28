import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var openForm:any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  callFunctionOpen() {
    openForm.open();
}

callFunctionHide() {
  openForm.hide();
}

callFunctionClose() {
  openForm.close();
}
}
