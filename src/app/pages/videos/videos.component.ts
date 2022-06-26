import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  // videos:any[]=[
  //   {video:"video 1"},
  //   {video:"video 2"},
  //   {video:"video 3"},
  //   {video:"video 4"},
  //   {video:"video 5"},
  //   {video:"video 6"},
  // ]


  constructor() { }

  ngOnInit(): void {
    var video = document.querySelectorAll(".videos")
    for (let i = 0; i < video.length; i++) {
      video[i].addEventListener('click',()=>{
        $(video[i]).children().children().addClass("icon_after_click")
        video[i].classList.add("videos_after_click");
      })

    }
  }

}
