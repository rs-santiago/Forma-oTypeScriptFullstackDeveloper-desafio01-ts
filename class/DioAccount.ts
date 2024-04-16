export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  setBalance = (balanceValue: number): number => {
    return this.balance = balanceValue
  }

  getBalance = (): number => {
    return this.balance
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

  consultBalance = (): void => {
    console.log(`${this.name} seu saldo é de: ${this.balance}`)
  }

  invalidateAccount = (): void => {
    this.status = false
    console.log('conta invalidada')
  }

  validateAccount = (): void => {
    this.status = true
    console.log('conta validada')
  }

  validateStatus = (): boolean => {
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
