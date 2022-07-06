import { Component, AfterViewInit } from '@angular/core';
import * as $ from "jquery";



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements  AfterViewInit {

  videos:any[]=[
    {
      icon:"fa-solid fa-circle-play",
      item:"video 2"
    },
    {
      icon:"fa-solid fa-circle-play",
      item:"video 3"
    },
    {
      icon:"fa-solid fa-circle-play",
      item:"video 4"
    },
    {
      icon:"fa-solid fa-circle-play",
      item:"video 5"
    },
    {
      icon:"fa-solid fa-circle-play",
      item:"video 6"
    },
  ]

  view:any[]=[
    {src:"../../../assets/videos/Blue Tit - 8201.mp4"},
    {src:"../../../assets/videos/Dog - 45587.mp4"},
    {src:"../../../assets/videos/Fish - 16166.mp4"},
    {src:"../../../assets/videos/Kid - 4470.mp4"},
    {src:"../../../assets/videos/The Hague - 27999.mp4"},
    {src:"../../../assets/videos/Fish - 16166.mp4"},
  ]


  constructor() { }

  ngAfterViewInit(): void {
    var video = document.querySelectorAll(".videos")
    var frame = document.querySelectorAll(".frame")
    for (let i = 0; i < video.length; i++) {
      video[i].addEventListener("click", function() {
        video.forEach(function(e){
            e.classList.remove("videos_after_click")
            $(e).children().children().removeClass("icon_after_click")
        })
        frame.forEach(function(e){
          e.classList.add("none")
          e.classList.remove("block")
      })
        $(video[i]).children().children().addClass("icon_after_click")
        video[i].classList.add("videos_after_click");
        frame[i].classList.add("block")
      })

    }
  }

}
