import { DioAccount } from "./DioAccount"

export class PromotionalAccount extends DioAccount {
  private promotionalValue = 10

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + depositValue + this.promotionalValue)
      console.log('Voce depositou')
    }
  }
}