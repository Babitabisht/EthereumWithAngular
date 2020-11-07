import { Component, Inject, OnInit } from '@angular/core';
import { WEB3 } from './web3';
import Web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(@Inject(WEB3) private web3: Web3) { }
  title = 'ethereum-test';
  appVersion;
  your_provider
  public data: any;

  async ngOnInit() {

  /*   console.log("==>", this.web3.currentProvider)
    if ('enable' in this.web3.currentProvider) {
      await this.web3.currentProvider.enable();
    } */
   
    this.appVersion = await  this.web3.version
   
  }
  updateData(event) {
    this.data = event;
  }
  changeProvider(){
    
  }
}
