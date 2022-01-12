package formation.nozama.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import formation.nozama.model.CompteClient;
import formation.nozama.repository.CompteClientRepository;

@Transactional
@RestController
@RequestMapping("client")
public class CompteClientRestController {

	@Autowired
	private CompteClientRepository repository;

	@CrossOrigin
	@GetMapping
	public List<CompteClient> list() {
		return this.repository.findAll();
	}

	@CrossOrigin
	@GetMapping("{login}")
	public CompteClient getOne(@PathVariable(name = "login") String id) {
		if (!this.repository.existsById(id)) {
			// this.repository.save(personne);
			// return "Compte inconnu ";
			return null;
		} else {
			Optional<CompteClient> o = this.repository.findById(id);
			CompteClient p = o.get();
			return p;

		}

	}

	@CrossOrigin
	@PostMapping
	public String create(@RequestBody CompteClient personne) {
		if (!this.repository.existsById(personne.getLogin())) {
			this.repository.save(personne);
			return "Compte create";
		} else {
			return "Erreur, l'article existe d�j�";
		}
	}

	@CrossOrigin
	@PutMapping
	public String update(@RequestBody CompteClient personne) {
		if (!this.repository.existsById(personne.getLogin())) {
			// this.repository.save(personne);
			return "Compte inconnu update";
		} else {
			Optional<CompteClient> o = this.repository.findById(personne.getLogin());
			CompteClient p = o.get();
			p.update(personne);
			this.repository.save(p);
			return "compte updated";
		}
	}

	@CrossOrigin
	@DeleteMapping
	public String delete(@RequestBody CompteClient personne) {
		System.out.println("truc");
		if (!this.repository.existsById(personne.getLogin())) {
			return "Compte inconnu suppression";
		} else {
			Optional<CompteClient> o = this.repository.findById(personne.getLogin());
			CompteClient p = o.get();
			this.repository.delete(o.get());
			return "compte supp";
		}
	}

	@CrossOrigin
	@GetMapping("{log}/{pass}")
	public CompteClient findByLoginAndPass(@PathVariable(name = "log") String mail,
			@PathVariable(name = "pass") String pass) {
		CompteClient p = repository.findByLoginAndPass(mail, pass);
		return p;

	}

}
