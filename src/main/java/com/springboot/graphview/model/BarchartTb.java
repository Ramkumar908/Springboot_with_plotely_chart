package com.springboot.graphview.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BarchartTb {
	@Id
	private String element;
	private int density;
	public String getElement() {
		return element;
	}
	public void setElement(String element) {
		this.element = element;
	}
	public int getDensity() {
		return density;
	}
	public void setDensity(int density) {
		this.density = density;
	}
	@Override
	public String toString() {
		return "BarchartTb [element=" + element + ", density=" + density + "]";
	}
	

}
