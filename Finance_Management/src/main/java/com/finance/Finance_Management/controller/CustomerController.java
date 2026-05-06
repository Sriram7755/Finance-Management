package com.finance.Finance_Management.controller;

import com.finance.Finance_Management.model.Customer;
import com.finance.Finance_Management.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerService service;

    @GetMapping("/")
    String home()
    {
        return " API IS WORKING 200";
    }

    @PostMapping("createCustomer")
    Customer createCustomer(@RequestBody Customer customer)
    {
        return service.createCustomer(customer);
    }



    @GetMapping("/getCustomer")
    List<Customer> getAllCustomer()
    {

        return service.getAllCustomers();
    }




    @GetMapping("getCustomerById/{id}")
    Optional<Customer> getCustomerById(@PathVariable Long id)
    {
        return service.getCustomerById(id);
    }

    @PutMapping("/updateCustomer/{id}")
    Customer updateCustomer(@PathVariable Long id, @RequestBody Customer customer) {
        return service.updateCustomer(id, customer);
    }

    @DeleteMapping("deleteCustomer/{id}")
    void deleteCustomer(@PathVariable Long id)
    {
        service.deleteCustomer(id);
    }
    @PutMapping("/updatePaidWeeks/{id}/{paidWeeks}")
    void updatePaidWeeks(@PathVariable Long id , @PathVariable int paidWeeks)
    {
        service.updatePaidWeeks(id,paidWeeks);
    }
}
