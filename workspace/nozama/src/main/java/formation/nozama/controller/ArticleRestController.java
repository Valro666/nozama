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

import formation.nozama.model.Article;
import formation.nozama.repository.ArticleRepository;
@Transactional
@RestController
@RequestMapping("/api")
public class ArticleRestController {

	@Autowired
	private ArticleRepository repository;

	//findAll
	@CrossOrigin
	@GetMapping("/article")
	public List<Article> list() {
		return this.repository.findAll();
	}

	//insert
	@CrossOrigin
	@PostMapping("/article")
	public void create(@RequestBody Article article) {

		this.repository.save(article);

	}
	
	//findById
	@CrossOrigin
	@GetMapping("/article/{id}")
	public Article findById(@PathVariable(name = "id") Integer id) {
		return this.repository.findById(id).get();

	}
	
	//update
	@CrossOrigin
	@PutMapping("/article")
	public void update(@RequestBody Article article) {

		this.repository.save(article);

	}

	//delete
	@CrossOrigin
	@DeleteMapping("/article/{id}")
	public void delete(@PathVariable(name = "id") Integer id) {

		Article a = this.repository.findById(id).get();
		this.repository.delete(a);

	}
	
	//findByNom
	@CrossOrigin
	@GetMapping("/articleNomCon/{nom}")
	public List<Article> findByNom(@PathVariable(name = "nom") String nom){
		return repository.findByNomContaining(nom);
	}
	
	//findByCategorie
	@CrossOrigin
	@GetMapping("/articleCatCon/{categorie}")
	public List<Article> findByCategorie(@PathVariable(name = "categorie") String categorie){
		return repository.findByCategorieContaining(categorie);
	}
	//findBySousCategorie
	@CrossOrigin
	@GetMapping("/articleSousCatCon/{sousCategorie}")
	public List<Article> findBySousCategorie(@PathVariable(name = "sousCategorie") String sousCategorie){
		return repository.findBySousCategorieContaining(sousCategorie);
	}
//	//findByFabricant
//	@CrossOrigin
//	@GetMapping("/articleSousCatCon/{fabricant}")
//	public List<Article> findByFabricant(@PathVariable(name = "fabricant") String fabricant){
//		return repository.findByFabricantContaining(fabricant);
//	}
	
	//findByPrix
	@CrossOrigin
	@GetMapping("/articlePrCon/{prix}")
	public List<Article> containing(@PathVariable(name = "prix") int prix){
		return repository.findByPrix(prix);
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
