package com.finance.Finance_Management.repository;

import com.finance.Finance_Management.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {

}
