package com.springboot.graphview.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.graphview.model.LinechartTb;

public interface LineChartRepo extends JpaRepository<LinechartTb,Integer> {

}
