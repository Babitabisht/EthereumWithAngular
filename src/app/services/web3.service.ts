import { Injectable,Inject } from '@angular/core';
import { WEB3 } from '../web3';
import Web3 from 'web3';
import { async } from '@angular/core/testing';
import  *  as  json_data from '../../../build/contracts/hello_world.json';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

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

  transfer= async(from,to_address,amount) =>{
  return  await  this.web3.eth.sendTransaction({
      from: from,
      to: to_address,
      value: amount
  })
/*   .then(result=>{
    console.log("result===>",result);
  }).catch(error=>{
    console.log("error===>",error);
  }) */
  }

  changeProvider = async()=>{

  }


  getBlock = async(type)=>{
    if(type == "latest"){
        return await this.web3.eth.getBlock('latest');
    }else{
        return await this.web3.eth.getBlock('pending')
    }
  }

  invokeContract = async(address) =>{
    console.log("json_data=====>", json_data,)
   

      
    var MyContract = new this.web3.eth.Contract(json_data.default.abi, '0x91445961050638733E5da89Bdff707Ea80855321');
  let c=  MyContract.methods.getName().call()
  console.log("c====>",c)
  }



}
