package com.finance.Finance_Management.service;

import com.finance.Finance_Management.model.Customer;
import com.finance.Finance_Management.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository repo;

   public Customer createCustomer(Customer customer)
    {
        double amountGiven = customer.getTotalAmount() - customer.getInterestAmount();
        double weeklyAmount = customer.getTotalAmount()/customer.getTotalWeeks();
        double paidAmount = weeklyAmount* customer.getPaidWeeks();
        double unPaidAmount = customer.getTotalAmount() - paidAmount;
        int unpaidWeeks = customer.getTotalWeeks() - customer.getPaidWeeks();
        customer.setAmountGiven(amountGiven);
        customer.setWeeklyAmount(weeklyAmount);
        customer.setPaidAmount(paidAmount);
        customer.setUnpaidAmount(unPaidAmount);
        customer.setUnpaidWeeks(unpaidWeeks);


       return  repo.save(customer);

    }

    public List<Customer> getAllCustomers()
    {
        return repo.findAll();
    }


    public Optional<Customer> getCustomerById(Long id)
    {
        return repo.findById(id);
    }

    public Customer updateCustomer(Long id, Customer customer) {

        Customer existing = repo.findById(id).orElseThrow();

        existing.setName(customer.getName());
        existing.setPhone(customer.getPhone());
        existing.setAddress(customer.getAddress());
        existing.setTotalAmount(customer.getTotalAmount());
        existing.setInterestAmount(customer.getInterestAmount());
        existing.setTotalWeeks(customer.getTotalWeeks());
        existing.setPaidWeeks(customer.getPaidWeeks());

        // Recalculate finance values
        double amountGiven = existing.getTotalAmount() - existing.getInterestAmount();
        double weeklyAmount = existing.getTotalAmount() / existing.getTotalWeeks();
        double paidAmount = weeklyAmount * existing.getPaidWeeks();
        double unpaidAmount = existing.getTotalAmount() - paidAmount;
        int unpaidWeeks = existing.getTotalWeeks() - existing.getPaidWeeks();

        existing.setAmountGiven(amountGiven);
        existing.setWeeklyAmount(weeklyAmount);
        existing.setPaidAmount(paidAmount);
        existing.setUnpaidAmount(unpaidAmount);
        existing.setUnpaidWeeks(unpaidWeeks);

        return repo.save(existing);
    }
   public  void deleteCustomer(Long id)
    {
        repo.deleteById(id);

    }

    public void updatePaidWeeks(Long id, int paidWeeks) {

        Customer existing = repo.findById(id).orElseThrow();

        existing.setPaidWeeks(paidWeeks);

        int unpaidWeeks = existing.getTotalWeeks() - paidWeeks;
        double paidAmount = existing.getWeeklyAmount() * paidWeeks;
        double unpaidAmount = existing.getTotalAmount() - paidAmount;

        existing.setUnpaidWeeks(unpaidWeeks);
        existing.setPaidAmount(paidAmount);
        existing.setUnpaidAmount(unpaidAmount);

        repo.save(existing);
    }
}
