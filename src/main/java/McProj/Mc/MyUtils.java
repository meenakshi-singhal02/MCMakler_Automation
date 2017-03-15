package McProj.Mc;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class MyUtils {


	
	public Properties loadFile(String filename)
	{
		
	
		Properties prop = new Properties();
	
		try {
			
			InputStream input = new FileInputStream(System.getProperty("user.dir")+"/src/test/resources/"+filename+".properties");
			prop.load(input);
		} 
		
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prop;
	}
	
	
	
	public String getPropertiesValue(String propkey, Properties prop)
	{
		String sValue = prop.getProperty(propkey);
		return sValue;
	}
	
	public void waitForPageToLoad()
	{
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		};
		
	}
	
	
}
