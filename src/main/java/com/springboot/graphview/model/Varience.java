package com.springboot.graphview.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Varience {
	@Id
	private int year;
	private int sales;
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
	@Override
	public String toString() {
		return "Varience [year=" + year + ", sales=" + sales + "]";
	}
	
	

}
