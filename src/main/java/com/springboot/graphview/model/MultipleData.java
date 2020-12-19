package com.springboot.graphview.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MultipleData {
	@Id
	
	private String Activity;
	private int hours;
	public String getActivity() {
		return Activity;
	}
	@Override
	public String toString() {
		return "MultipleData [Activity=" + Activity + ", hours=" + hours + "]";
	}
	public void setActivity(String activity) {
		Activity = activity;
	}
	public int getHours() {
		return hours;
	}
	public void setHours(int hours) {
		this.hours = hours;
	}
	
	
	
	
}
