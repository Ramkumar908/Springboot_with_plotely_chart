package com.springboot.graphview.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.graphview.model.GraphData;

public interface GraphRepository extends JpaRepository <GraphData,Integer>{
	
	List<GraphData> findByCountry(String country);
	
	

}
