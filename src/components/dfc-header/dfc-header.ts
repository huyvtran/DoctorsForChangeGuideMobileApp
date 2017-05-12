import { Component,Input, OnInit } from '@angular/core';
import { StorageService} from '../../providers/storage-service';

@Component({
  selector: 'dfc-header',
  templateUrl: 'dfc-header.html'
})
export class DFCHeader implements OnInit {

  @Input()
  headerTitle: string;

  @Input()
  headerComponent: any;

  constructor(private storageService : StorageService) {}

  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(this.headerComponent).then(isFavorite => this.isFavorite = isFavorite);
  }

  ngOnInit() {
    this.storageService.isFavorite(this.headerComponent).then(isFav => this.isFavorite = isFav);
  }

}
