package com.springboot.graphview.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.graphview.model.MultipleData;

public interface MultipledataRepo  extends JpaRepository<MultipleData,Integer> {

}
