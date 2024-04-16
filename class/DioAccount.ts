export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + depositValue
      console.log('Voce depositou')
    }
  }

  withdraw = (withdrawValue: number): void => {
    if(this.validateStatus() && this.hasbalance(withdrawValue)){
      this.balance = this.balance - withdrawValue
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  invalidateAccount = (): void => {
    this.status = false
    console.log('conta invalidada')
  }

  validateAccount = (): void => {
    this.status = true
    console.log('conta validada')
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private hasbalance = (withdrawValue: number): boolean => {
    if (withdrawValue <= this.balance){
      return true
    }
    throw new Error(`Saldo insuficiente`)
  }
}
