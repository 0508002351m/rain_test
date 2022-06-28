import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  icons:any[]=[
    {icon:"fa-solid fa-folder-tree"},
    {icon:"fa-solid fa-rectangle-list"},
    {icon:"fa-solid fa-server"},
    {icon:"fa-solid fa-gauge-high"},
  ]
  constructor() { }

  ngOnInit(): void {
    var float:any = document.getElementById('float_list')


        $("#1").click(()=>{
          setTimeout(() => {
            console.log("kkkk")
          }, 100);
        })



  }

}
