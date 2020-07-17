import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {loop, setDimensions,drawBackground,drawText,drawGrid, click, highlightGrid,initContext} from "./puissance4/connect4"
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements AfterViewInit {
  @ViewChild("myCanva",{static: true})
  myCanva: ElementRef<HTMLCanvasElement>
  ctx : CanvasRenderingContext2D

  ngAfterViewInit(): void{
    this.ctx = this.myCanva.nativeElement.getContext("2d")
    initContext(this.ctx)
    this.myCanva.nativeElement.addEventListener("click", click)
    this.myCanva.nativeElement.addEventListener("mousemove",highlightGrid)
    setDimensions(this.myCanva.nativeElement)
    requestAnimationFrame(loop)
  }
}
