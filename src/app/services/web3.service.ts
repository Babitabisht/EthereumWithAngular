import { Injectable,Inject } from '@angular/core';
import { WEB3 } from '../web3';
import Web3 from 'web3';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  constructor(@Inject(WEB3) private web3: Web3) { }
  

  getAccounts=async()=>{
   return await this.web3.eth.getAccounts()
  }

  getVersion= async()=>{
    return await this.web3.version;
  }

  getBalance = async(address) =>{
    console.log("address==>", address)
    let balance= await this.web3.eth.getBalance(address)
    return  this.web3.utils.fromWei(balance,'ether');
  }

  transfer= async(to_address) =>{

  }



}
