import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { WEB3 } from '../../web3';
import Web3 from 'web3';
import { Web3Service } from '../../services/web3.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  @Input()
  public data: any
 

  @Output()
  public onData: EventEmitter<any> = new EventEmitter<any>();
  balance;
  input_address:string
  input_ethers:Number
  your_provider:string
  result;
  result2;
  constructor(@Inject(WEB3) private web3: Web3,
    private web3Service: Web3Service
  ) { }

  ngOnInit(): void {
  }

  transfer=async()=>{
    console.log("transfer",this.data, this.input_address, this.input_ethers) 
    this.result  = await this.web3Service.transfer(this.data, this.input_address, this.input_ethers);
    console.log("here",this.result)

    this.result2= await this.web3Service.invokeContract(this.data)
    console.log("result2===>", this.result2);
  }

  changeProvider=async()=>{
    console.log("change provider", this.your_provider);

  }

}
