package com.springboot.graphview.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class GraphData {

	@Id
	private int id;
	private String country;
	private String tech;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getTech() {
		return tech;
	}
	public void setTech(String tech) {
		this.tech = tech;
	}
	@Override
	public String toString() {
		return "GraphData [id=" + id + ", country=" + country + ", tech=" + tech + "]";
	}
}
