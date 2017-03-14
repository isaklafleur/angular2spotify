import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchStr:string;

  constructor(private _spotifyService: SpotifyService) {

  }

  searchMusic() {
    //console.log(this.searchStr)
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(res.artists.items);
    })



  }
}
