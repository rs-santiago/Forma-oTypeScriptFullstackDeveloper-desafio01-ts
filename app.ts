import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PromotionalAccount } from './class/PromotionalAccount'

const promotionalAccount: PromotionalAccount = new PromotionalAccount(1, 'Nath', 1)
promotionalAccount.deposit(100)
promotionalAccount.consultBalance()

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(10)
peopleAccount.consultBalance()

const loanCompanyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
loanCompanyAccount.deposit(10)
loanCompanyAccount.getLoan(100)
loanCompanyAccount.consultBalance()


const invalidPeopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 30)
invalidPeopleAccount.invalidateAccount()
invalidPeopleAccount.deposit(100)
invalidPeopleAccount.withdraw(10)
invalidPeopleAccount.consultBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 40)
companyAccount.deposit(10)
companyAccount.withdraw(100)
