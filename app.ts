import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PromotionalAccount } from './class/PromotionalAccount'

try {
    console.info('\n\nTest method of CompanyAccount')
    const companyAccount: CompanyAccount = new CompanyAccount('CompanyAccount 1', 1)
    console.log(`Nome: ${companyAccount.getName()}`)
    console.log(`Número da conta: ${companyAccount.getAccountNumber()}`)
    companyAccount.deposit(100)
    companyAccount.consultBalance()
    companyAccount.getLoan(50)
    companyAccount.consultBalance()
    companyAccount.withdraw(10)
    companyAccount.consultBalance()
    companyAccount.invalidateAccount()
    companyAccount.validateAccount()
} catch (error) {
    console.log(error)
}

try {
    console.info('\n\nTest method of PeopleAccount')
    const peopleAccount: PeopleAccount = new PeopleAccount(1234, 'PeopleAccount 1', 2)
    console.log(`Nome: ${peopleAccount.getName()}`)
    console.log(`Número de documento: ${peopleAccount.getDocId()}`)
    console.log(`Número da conta: ${peopleAccount.getAccountNumber()}`)
    peopleAccount.deposit(100)
    peopleAccount.consultBalance()
    peopleAccount.withdraw(10)
    peopleAccount.consultBalance()
    peopleAccount.invalidateAccount()
    peopleAccount.validateAccount()
} catch (error) {
    console.log(error)
}

try {
    console.info('\n\nTest method of PromotionalAccount')
    const promotionalAccount: PromotionalAccount = new PromotionalAccount('PromotionalAccount 1', 1)
    console.log(`Nome: ${promotionalAccount.getName()}`)
    console.log(`Número da conta: ${promotionalAccount.getAccountNumber()}`)
    promotionalAccount.deposit(100)
    promotionalAccount.consultBalance()
    promotionalAccount.withdraw(10)
    promotionalAccount.consultBalance()
    promotionalAccount.invalidateAccount()
    promotionalAccount.validateAccount()
} catch (error) {
    console.log(error)
}