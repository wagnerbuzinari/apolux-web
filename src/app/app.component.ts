import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Apolux';

  ngOnInit(): void {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ {
        $('.opaque-navbar').addClass('opaque');
      } else {
        $('.opaque-navbar').removeClass('opaque');
      }
    });

    // if (location.protocol === 'http:') {
    //   window.location.href = location.href.replace('http', 'https');
    // }
  }

  ngAfterViewInit() {
    $('#overlay').fadeOut('1000');
  }


  scrollTo(element) {
    console.log(element)
    $([document.documentElement, document.body]).animate({
      scrollTop: $(`#${element}`).offset().top
    }, 1000);
  }

  openFile(fileName) {
    window.open("/assets/" + fileName);
  }
}
