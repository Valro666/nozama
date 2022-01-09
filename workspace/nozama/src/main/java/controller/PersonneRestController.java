package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Article;
import model.CompteClient;
import repository.CompteClientRepository;

@RestController
@RequestMapping("/personne")
public class PersonneRestController {

	@Autowired
	private CompteClientRepository repository;

	 @CrossOrigin
	@GetMapping("/personnes")
	public List<CompteClient> list() {
		return this.repository.findAll();
	}

	 @CrossOrigin
	@PostMapping("/personnes")
	public String create(@RequestBody CompteClient personne) {
		if (!this.repository.existsById(personne.getMail())) {
			this.repository.save(personne);
			return "Article créé";
		} else {
			return "Erreur, l'article existe déjà";
		}
	}

	 @CrossOrigin
	@GetMapping("/personnes/{mail}/{pass}")
	public CompteClient findByMailAndPass(@PathVariable(name = "mail") String mail,@PathVariable(name = "pass") String pass) {
		CompteClient p=repository.findByMailAndPass(mail, pass);
		return p;

	}
	
	
	

}
