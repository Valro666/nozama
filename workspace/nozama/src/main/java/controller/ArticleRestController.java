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
import repository.ArticleRepository;

@RestController
@RequestMapping("/api")
public class ArticleRestController {

	@Autowired
	private ArticleRepository repository;

	@CrossOrigin
	@GetMapping("/article")
	public List<Article> list() {
		return this.repository.findAll();
	}

	@CrossOrigin
	@PostMapping("/article")
	public void create(@RequestBody Article article) {

		this.repository.save(article);

	}

	@CrossOrigin
	@GetMapping("/article/{id}")
	public Article findById(@PathVariable(name = "id") Integer id) {
		return this.repository.findById(id).get();

	}

	@CrossOrigin
	@PutMapping("/article")
	public void update(@RequestBody Article article) {

		this.repository.save(article);

	}

	@CrossOrigin
	@DeleteMapping("/article/{id}")
	public void delete(@PathVariable(name = "id") Integer id) {

		Article a = this.repository.findById(id).get();
		this.repository.delete(a);

	}
	
	@CrossOrigin
	@GetMapping("/articleCon/{id}")
	public List<Article> containing(@PathVariable(name = "id") String id){
		return repository.findByMarqueContaining(id);
	}

	// @CrossOrigin
	// @GetMapping("/articlev2")
	// public ResponseEntity<List<Article>> listv2() {
	// return new ResponseEntity<>(this.repository.findAll(), HttpStatus.OK);
	// }

	// @CrossOrigin
	// @PostMapping("/article")
	// public void create(@RequestBody Article article) {
	//
	// this.repository.save(article);
	//
	// }

	// @CrossOrigin
	// @PostMapping("/article")
	// public ResponseEntity<String> create(@RequestBody Article article) {
	// if (!this.repository.existsById(article.getId())) {
	// this.repository.save(article);
	// return new ResponseEntity<>("Article créé", HttpStatus.CREATED);
	// } else {
	// return new ResponseEntity<>("Erreur, l'article existe déjà",
	// HttpStatus.CONFLICT);
	// }
	// }

	// @CrossOrigin
	// @GetMapping("/article/{id}")
	// public ResponseEntity<Article> findById(@PathVariable(name = "id")
	// Integer id) {
	// if (this.repository.existsById(id)) {
	// return new ResponseEntity<>(this.repository .findById(id)
	// .get(),
	// HttpStatus.OK);
	// } else {
	// return new ResponseEntity<>(new Article(), HttpStatus.NOT_FOUND);
	// }
	//
	// }

	// @CrossOrigin
	// @PutMapping("/article")
	// public ResponseEntity<String> update(@RequestBody Article article) {
	// if (this.repository.existsById(article.getId())) {
	// this.repository.save(article);
	// return new ResponseEntity<>("Article mis à jour", HttpStatus.OK);
	// } else {
	// return new ResponseEntity<>("Erreur, l'article n'existe pas",
	// HttpStatus.NOT_MODIFIED);
	// }
	// }

	// @CrossOrigin
	// @DeleteMapping("/article/{id}")
	// public ResponseEntity<String> delete(@PathVariable(name = "id") Integer
	// id) {
	// if (this.repository.existsById(id)) {
	// Article a = this.repository .findById(id)
	// .get();
	// this.repository.delete(a);
	// return new ResponseEntity<>("Article supprimé", HttpStatus.OK);
	// } else {
	// return new ResponseEntity<>("Erreur, l'article n'existe pas",
	// HttpStatus.NOT_FOUND);
	// }
	// }

}
