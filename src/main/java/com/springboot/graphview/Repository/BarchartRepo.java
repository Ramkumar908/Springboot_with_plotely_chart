package com.springboot.graphview.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.graphview.model.BarchartTb;

public interface BarchartRepo extends JpaRepository<BarchartTb,Integer> {

}
