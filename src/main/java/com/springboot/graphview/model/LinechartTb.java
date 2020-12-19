package com.springboot.graphview.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class LinechartTb {
@Id
private int year;
private int sales;
private int expenses;
public int getYear() {
	return year;
}
public void setYear(int year) {
	this.year = year;
}
public int getSales() {
	return sales;
}
public void setSales(int sales) {
	this.sales = sales;
}
public int getExpenses() {
	return expenses;
}
public void setExpenses(int expenses) {
	this.expenses = expenses;
}
@Override
public String toString() {
	return "LinechartTb [year=" + year + ", sales=" + sales + ", expenses=" + expenses + "]";
}




}
