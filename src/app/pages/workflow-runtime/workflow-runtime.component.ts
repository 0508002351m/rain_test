import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow-runtime',
  templateUrl: './workflow-runtime.component.html',
  styleUrls: ['./workflow-runtime.component.css']
})
export class WorkflowRuntimeComponent implements OnInit {
  bar_bottom:any[]=[
    {
      title:"Welcome Module Journey"
    },
    {
      title:"Environment Group Admin"
    },
    {
      title:"Data Connection -REST"
    },
    {
      title:"Form Designer"
    },
    {
      title:"Workflow Manager"
    },
    {
      title:"Workflow Runtime Data Capture & Notification"
    },
    {
      title:"Data /Workflow Integration"
    },
    {
      title:"WF Runtime & Notification"
    },
    {
      title:"Data Visualization"
    },
    {
      title:"Process Visualization"
    },
    {
      title:"CTA - DYI"
    },
  ]

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
