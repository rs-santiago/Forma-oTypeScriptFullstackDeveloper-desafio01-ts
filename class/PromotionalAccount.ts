import { DioAccount } from "./DioAccount"

export class PromotionalAccount extends DioAccount {
  private promotionalValue = 10

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + depositValue + this.promotionalValue
      console.log('Voce depositou')
    }
  }
}