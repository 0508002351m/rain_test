import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-workflow-runtime',
  templateUrl: './workflow-runtime.component.html',
  styleUrls: ['./workflow-runtime.component.css']
})
export class WorkflowRuntimeComponent implements OnInit {
  bar_bottom: any[] = [
    {
      title: "Create Your Own Form"
    },
    {
      title: "Workflow Manager"
    },
    {
      title: "Link To WorkFlow"
    },
    {
      title: "Process Visual"
    },
    {
      title: "Workflow Dashboard"
    },
    {
      title: "Charting"
    },
    {
      title: "Chat Configuration"
    },
    {
      title: "Integration"
    },
    {
      title: "Configure REST Task"
    },
  ]

  dynamicContent: any[] = [
    {
      src: "../../../assets/images/m (1).jpg",
      vidSrc: "../../../assets/videos/Blue Tit - 8201.mp4"
    },
    {
      src: "../../../assets/images/m (2).jpg",
      vidSrc: "../../../assets/videos/Dog - 45587.mp4"
    },
    {
      src: "../../../assets/images/m (3).jpg",
      vidSrc: "../../../assets/videos/Fish - 16166.mp4"
    },
    {
      src: "../../../assets/images/m (4).jpg",
      vidSrc: "../../../assets/videos/Kid - 4470.mp4"
    },
    {
      src: "../../../assets/images/m (5).jpg",
      vidSrc: "../../../assets/videos/The Hague - 27999.mp4"
    },

  ];

  played_step: any[] = [
    {
      icon: "fa-solid fa-circle-play",
      number: 1,
    },
    {
      icon: "fa-solid fa-circle-play",
      number: 2,
    },
    {
      icon: "fa-solid fa-circle-play",
      number: 3,
    },
    {
      icon: "fa-solid fa-circle-play",
      number: 4,
    },
    {
      number: 5,
    },
  ];

  constructor() { }
  ngOnInit(): void {
    var play = document.querySelectorAll('.play_step')
    var num = document.querySelectorAll('.number_step')
    var progress = document.querySelectorAll('.progress-second')
    $(document).ready(function () {
      $("#skip").click(function () {
        if ($(".content:visible").next().length != 0) {
          $(".content:visible").next().show().prev().hide();
          if ($(".re").length != 0) {
            $(".active").next().addClass("re active").prev().removeClass("active");
          }
          else { $(".active").addClass("re") };
          $(".initial").next().addClass("initial").prev().html('<i class="fa-solid fa-check"></i>').removeClass("initial").addClass("prev_step");
          $(".initial i").addClass("initial")
        }
        else{
          window.location.replace("");
        }
      });
    });
  }
}
