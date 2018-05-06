import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youtube Frame App';

  public video1: String;
  public video2: String;
  public YT: any;
  public player1: any;
  public player2: any;

  constructor() { }

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.init();
    this.video1 = this.cleanYoutubeURL('https://www.youtube.com/watch?v=yL0RzgUpGjk'); 
    this.video2 = this.cleanYoutubeURL('https://www.youtube.com/watch?v=AZ1pHmWhIuY');

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];

      this.player1 = new window['YT'].Player('player1', {
        videoId: this.video1
      });

      this.player2 = new window['YT'].Player('player2', {
        videoId: this.video2
      });
    };

    this.cleanYoutubeURL('none')
  }

  cleanYoutubeURL(url) {
    return url.split('=')[1];
  }
}
