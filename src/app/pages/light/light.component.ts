import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  icons:any[]=[
    {icon:"fa-solid fa-display"},
    {icon:"fa-solid fa-screwdriver-wrench"},
    {icon:"fa-solid fa-mobile-screen-button"},
    {icon:"fa-solid fa-folder-tree"},
    {icon:"fa-solid fa-rectangle-list"},
    {icon:"fa-solid fa-server"},
    {icon:"fa-solid fa-gauge-high"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
