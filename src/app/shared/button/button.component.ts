import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('background') background: string;
  @Input('color') color: string;
  @Input('size') size: string;
  @Input('className') className: string;
  @Input('style') style: object
  @Input('text') text: string;
  @Input('disabled') disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
