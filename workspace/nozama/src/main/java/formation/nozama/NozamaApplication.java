package formation.nozama;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication//(exclude = {DataSourceAutoConfiguration.class })
public class NozamaApplication {

	public static void main(String[] args) {
		SpringApplication.run(NozamaApplication.class, args);
	}

}
