package com.springboot.graphview.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.springboot.graphview.Repository.BarchartRepo;
import com.springboot.graphview.Repository.GraphRepository;
import com.springboot.graphview.Repository.LineChartRepo;
import com.springboot.graphview.Repository.MultipledataRepo;
import com.springboot.graphview.Repository.VarienceRepo;
import com.springboot.graphview.model.BarchartTb;
import com.springboot.graphview.model.GraphData;
import com.springboot.graphview.model.LinechartTb;
import com.springboot.graphview.model.MultipleData;
import com.springboot.graphview.model.Varience;

@Controller
public class GraphController {
	
	private static final Logger logger = LogManager.getLogger(GraphController.class);
	
	@Autowired
	GraphRepository repo;
	 
	@Autowired
	MultipledataRepo mRepo;
	
	@Autowired
	LineChartRepo linechartRepo;
	
	@Autowired
	BarchartRepo barchartrepo;
	
	@Autowired
	VarienceRepo vRepo;
	
	@Autowired
	GraphRepository graphRepo;
	
	@RequestMapping("/")
	public String Welcome()
	{
		logger.debug("Debugging log");
        logger.info("Info log");
        logger.warn("Hey, This is a warning!");
        logger.error("Oops! We have an Error. OK");
        logger.fatal("Damn! Fatal error. Please fix me.");
		return "welcome.jsp";
	}
	
	   
@RequestMapping(value="/saveUser",method=RequestMethod.POST)
public String saveUser( @RequestBody GraphData Graphdata)
{
	
	System.out.println(repo.findAll());
	repo.save(Graphdata);
	System.out.println(Graphdata);
	
	
	return "Data saved";
}
	
	    @GetMapping("/GetData")
	    public ResponseEntity<List<GraphData>> getPieChart() {
	      //  Map<String, Integer> graphData = new TreeMap<>();
	    	List <GraphData> list=new ArrayList<GraphData>();
	        list.addAll(repo.findAll());
	        return new ResponseEntity<>(list, HttpStatus.OK);
	    }
	    
	    @GetMapping("/Piechart")
	    public ResponseEntity<List<MultipleData>> getpieChart()
	    {
	    	List <MultipleData> list=new ArrayList<MultipleData>();
	    	list.addAll(mRepo.findAll());
	       
	        return new ResponseEntity<>(list, HttpStatus.OK);
	    }
	    
	    @GetMapping("/linechart")
	    public ResponseEntity<List<LinechartTb>> getlineChart()
	    {
	    	List <LinechartTb> list=new ArrayList<LinechartTb>();
	    	list.addAll(linechartRepo.findAll());
	       
	        return new ResponseEntity<>(list, HttpStatus.OK);
	    }
	    @GetMapping("/Barchart")
	    public ResponseEntity<List<BarchartTb>> getBarChart()
	    {
	    	List <BarchartTb> list=new ArrayList<BarchartTb>();
	    	list.addAll(barchartrepo.findAll());
	       
	        return new ResponseEntity<>(list, HttpStatus.OK);
	    }
	    
	    @GetMapping("/VarienceChart")
	    public ResponseEntity<List<Varience>> getVarience()
	    {
	    	List <Varience> list=new ArrayList<Varience>();
	    	list.addAll(vRepo.findAll());
	         return new ResponseEntity<>(list, HttpStatus.OK);
	    }
	    

	    @RequestMapping( value="/getTechdata",method= {RequestMethod.GET,RequestMethod.POST})
	    
	    public ResponseEntity<List<GraphData>> getData(@RequestParam("country") String country)
	    {
	    	List <GraphData> list=new ArrayList<GraphData>();
	    	list.addAll(graphRepo.findByCountry(country));
	       
	        return new ResponseEntity<>(list, HttpStatus.OK);
	    }
	   
	    
	    
	    
	    

}
