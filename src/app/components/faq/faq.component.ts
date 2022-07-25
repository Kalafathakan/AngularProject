import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  
  public singleBranchExpand = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
