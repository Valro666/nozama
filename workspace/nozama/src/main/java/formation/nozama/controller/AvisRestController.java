package formation.nozama.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import formation.nozama.model.Avis;
import formation.nozama.repository.ArticleRepository;
import formation.nozama.repository.AvisRepository;

@Transactional
@RestController
@RequestMapping("/api")
public class AvisRestController {

	@Autowired
	private AvisRepository repository;
	private ArticleRepository artRepository;

	// findAll
	@CrossOrigin
	@GetMapping("/avis")
	public List<Avis> list() {
		return this.repository.findAll();
	}

	// insert
	@CrossOrigin
	@PostMapping("/avis")
	public void create(@RequestBody Avis avis) {

		this.repository.save(avis);

	}

	// update
	@CrossOrigin
	@PutMapping("/avis")
	public void update(@RequestBody Avis avis) {

		this.repository.save(avis);

	}

	// delete
	@CrossOrigin
	@DeleteMapping("/avis/{id}")
	public void delete(@PathVariable(name = "id") Integer id) {

		Avis a = this.repository.findById(id).get();
		this.repository.delete(a);

	}

	// findById
	@CrossOrigin
	@GetMapping("/avis/{id}")
	public Avis findById(@PathVariable(name = "id") Integer id) {
		return this.repository.findById(id).get();

	}

	// findByNote
	@CrossOrigin
	@GetMapping("/avisNote/{note}")
	public List<Avis> findByNom(@PathVariable(name = "note") Integer note) {
		return repository.findByNote(note);
	}

	// findByArticleId
	@CrossOrigin
	@GetMapping("/avisArticleId/{id}")
	public List<Avis> findByArticleId(@PathVariable(name = "id") int articleid) {
		;

		return repository.findByArticleId(articleid);
	}

}
