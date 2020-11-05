import { Component, OnInit,Inject,EventEmitter,Output, Input } from '@angular/core';
import { WEB3 } from '../../web3';
import Web3 from 'web3';
import {Web3Service}  from '../../services/web3.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts:string[];
  @Input() public data: any
  @Output() newItemEvent = new EventEmitter<string>();
  @Output()
  public onData: EventEmitter<any> = new EventEmitter<any>();

  constructor(@Inject(WEB3) private web3: Web3,private web3Service:Web3Service) { }

  async ngOnInit() {
    this.accounts = await this.web3Service.getAccounts();
    console.log("===>accounts",this.accounts)
  }

  addressClicked(from_address){
    console.log("clicked!")
    console.log(from_address);
    this.onData.emit(from_address);
  }
}
