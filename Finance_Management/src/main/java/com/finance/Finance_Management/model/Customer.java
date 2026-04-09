package com.finance.Finance_Management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Customer {

    @Id
            @GeneratedValue
            Long id;

    String name;
    String phone;
    String address;
    double totalAmount;
    double interestAmount;
    double amountGiven;
    double paidAmount;
    double unpaidAmount;
    double weeklyAmount;
    int totalWeeks;
    int paidWeeks = 0;
    int unpaidWeeks;
}

