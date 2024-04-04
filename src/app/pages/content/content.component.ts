import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFaka} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id: string | null = "0"
  constructor(private rout:ActivatedRoute) {}
  ngOnInit(): void {
    this.rout.paramMap.subscribe(
      valure => this.id = valure.get('id')
      )
      this.setValuesToComponent(this.id)
  }
    setValuesToComponent(id:string | null){
      const result = dataFaka.filter( article => article.id === id)[0]
            this.contentTitle = result.title
            this.photoCover = result.photo
            this.contentDescription = result.description
    }
}
