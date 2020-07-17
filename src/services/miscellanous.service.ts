import { Injectable } from '@angular/core'    
@Injectable()    
export class MiscellanousServices {    
    allLogo = [];    
    
    getLogo() {    
        return this.allLogo = detailsLogo.slice(0);    
    }    

}    
const detailsLogo = [    
    { id: 1, brand: "facebook", location: "/assets/images/logo/face.png", url: "https://facebook.com" },    
    { id: 2, brand: "instagram", location: "/assets/images/logo/instagram.png", url: "https://instagram.com" },    
    { id: 3, brand: "pinterest", location: "/assets/images/logo/pinterest.jpg", url: "https://pinterest.com" },    
    { id: 4, brand: "twitter", location: "/assets/images/logo/twitter.jpg", url: "https://twitter.com" }
]    