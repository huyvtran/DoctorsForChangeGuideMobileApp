import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {

  constructor(private storage: Storage) {
    console.log('Hello StorageService Provider');
  }

  toggleFavoritePage(page){
  	return this.isFavorite(page).then(
  		isFavorite => {
  			console.log("isFavorite",isFavorite)
  			if(isFavorite){
  				this.unfavoritePage(page);
  				return false;
  			} else {
  				this.favoritePage(page);
  				return true;
  			}
  		}
  	);
  }

  favoritePage(page){
  	this.storage.ready().then(() => {
       this.storage.set(page.name, page.name);
     });

  }

  unfavoritePage(page){
  	this.storage.ready().then(() => {
       this.storage.remove(page.name);
     });

  }

  isFavorite(page){
  	return this.storage.ready().then(() => {
       return this.storage.get(page.name).then(
       data => {
       		console.log(data)
       		return data != null;
       });

     });

  }

  getAllFavorites(){
  	//this.storage.clear();
  	return this.storage.keys();//.then(data => {});
  }

}
