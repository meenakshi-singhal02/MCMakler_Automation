package McProj.Mc;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = {"src/test/resources"},
plugin = {"pretty","html:target/cucumber-html-report","junit:target/cucumber-junit-report/allcukes.xml","html:target/site/cucumber-pretty","json:target/cucumber.json"}
//,tags={"@Prerequsite_Scenario_9,@Scenario_9"}
)
public class Runner {

}
