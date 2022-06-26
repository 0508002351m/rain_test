import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  bar_bottom:any[]=[
  {
    title:"Form Designer"
  },
  {
    title:"Create Your Own Form"
  },
  {
    title:"WorkFlow Manager"
  },
  {
    title:"Link To WorkFlow"
  },
  {
    title:"Process Visual"
  },
  {
    title:"Workflow Dashboard"
  },
  {
    title:"Charting"
  },
  {
    title:"Chart Configuration"
  },
  {
    title:"Integration"
  },
  {
    title:"Configure Rest Task"
  },
]

  // numbered_circle:any[]=[
  //   {
  //     number:1
  //   },
  //   {
  //     number:2
  //   },
  //   {
  //     number:3
  //   },
  //   {
  //     number:4
  //   },
  //   {
  //     number:5
  //   },
  // ]
  // play_circle:any[]=[
  //   {
  //     icon:"fa-solid fa-circle-play"
  //   },
  //   {
  //     icon:"fa-solid fa-circle-play"
  //   },
  //   {
  //     icon:"fa-solid fa-circle-play"
  //   },
  //   {
  //     icon:"fa-solid fa-circle-play"
  //   },
  //   {
  //     icon:"fa-solid fa-circle-play"
  //   },
  // ]
  constructor() { }

  ngOnInit(): void {
    var play= document.querySelectorAll('.play_step')
    var num= document.querySelectorAll('.number_step')

    for (let i = 0; i < play.length; i++) {
      play[i].addEventListener('click',()=>{

        const icon:any = (play[i].firstChild)
        icon.classList.add('play_focus')
        play[i].classList.add('play_focus')
      })
    }

    for (let i = 0; i < num.length; i++) {
      num[i].addEventListener('click',()=>{
        num[i].classList.add("number_focus")
      })
    }
  }

}
