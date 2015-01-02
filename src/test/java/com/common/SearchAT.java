package com.common;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/com/features", glue = "com.defs", tags = {"@search"}, plugin = {"pretty" , "html:target/cukes/SearchAT"})
public class SearchAT {
}
