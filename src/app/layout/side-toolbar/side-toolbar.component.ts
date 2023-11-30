import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';



@Component({
  selector: 'app-side-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule, MatListModule],
  templateUrl: './side-toolbar.component.html',
  styleUrl: './side-toolbar.component.scss'
})
export class SideToolbarComponent {

}