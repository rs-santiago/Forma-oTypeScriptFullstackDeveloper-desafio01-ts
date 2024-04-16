import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(10)
peopleAccount.getBalance()

const loanCompanyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
loanCompanyAccount.deposit(10)
loanCompanyAccount.getLoan(100)
loanCompanyAccount.getBalance()


const invalidPeopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
invalidPeopleAccount.invalidateAccount()
invalidPeopleAccount.deposit(100)
invalidPeopleAccount.withdraw(10)
invalidPeopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.withdraw(100)
