package com.cucumber.SageTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format={"html:target/cucumber","json:target/cucumber.json"},
		features= "src/test/resource", tags="@all"
		)

public class TestRunner {

}
