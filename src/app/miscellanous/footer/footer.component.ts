import { Component, OnInit } from '@angular/core';
import { MiscellanousServices } from 'src/services/miscellanous.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logos : any[]
  constructor(private miscService : MiscellanousServices) { }

  ngOnInit() {
    this.logos = this.miscService.getLogo()
    console.log(this.logos)
  }


}
