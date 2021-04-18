import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public filterBy: {
    term: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSetFilter(event){
    console.log(event.target.value);
    
  }

}
