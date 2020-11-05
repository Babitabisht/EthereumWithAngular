import { Component,Input, OnInit,Inject, Output, EventEmitter } from '@angular/core';
import { WEB3 } from '../../web3';
import Web3 from 'web3';
import {Web3Service} from '../../services/web3.service';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  
  @Input()
  public data: any

  @Output()
  public onData: EventEmitter<any> = new EventEmitter<any>();

  balance;
  constructor(@Inject(WEB3) private web3: Web3,
  private web3Service:Web3Service
  ) { }

 async ngOnInit() {
     /*   console.log("==>", this.web3.currentProvider)
    if ('enable' in this.web3.currentProvider) {
      await this.web3.currentProvider.enable();
    } */

  }

 

  updateData(data) {
    console.log("dssssss")
    //send data back to parent
    //data could be coming from a service/async http request as well.
    this.onData.emit(data)
  }

  getBalance = async( _fromAddress)=>{
  this.balance=await   this.web3Service.getBalance(_fromAddress);
  }

}
