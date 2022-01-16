package formation.nozama.controller;

import java.sql.Date;
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

import formation.nozama.model.Article;
import formation.nozama.model.CompteClient;
import formation.nozama.model.Ligne;
import formation.nozama.model.Panier;
import formation.nozama.model.Single;
import formation.nozama.repository.ArticleRepository;
import formation.nozama.repository.CompteClientRepository;
import formation.nozama.repository.PanierRepository;

@Transactional
@RestController
@RequestMapping("/panier")
public class PanierRestController {

	@Autowired
	private PanierRepository panier_repo;
	@Autowired
	private ArticleRepository article_repo;
	@Autowired
	private CompteClientRepository cc_repo;

	@CrossOrigin
	@GetMapping
	public List<Panier> list() {
		System.out.println("coucou");
		return this.panier_repo.findAll();
	}

	@CrossOrigin
	@PostMapping
	public void create(@RequestBody Panier panier) {
		// System.out.println("coucou");

		panier.setDate(Single.getInstance().getDate());

		System.out.println(panier);

		panier_repo.save(panier);
	}

	@CrossOrigin
	@GetMapping("{id}")
	public Panier findId(@PathVariable(name = "id") String id) {

		Optional<Panier> o = panier_repo.findById(Integer.parseInt(id));
		return o.get();
		// panier_repo.find

	}

	@CrossOrigin
	@DeleteMapping("{id}")
	public void delete(@PathVariable(name = "id") String id) {

		panier_repo.deleteById(Integer.parseInt(id));
		// panier_repo.find

	}

	@CrossOrigin
	@PostMapping("test")
	public void create2() {
		System.out.println("coucou");

		Optional<CompteClient> solo = cc_repo.findById("solo");
		System.out.println(solo);
		Panier p = new Panier();
		Optional<Article> art = article_repo.findById(1);
		Ligne ligne = new Ligne(article_repo.findById(1).get(), 12);
		Ligne ligne2 = new Ligne(article_repo.findById(2).get(), 12);
		java.util.Date date = Single.getInstance().getDate();
		p.setDate(date);
		p.add(ligne);
		p.add(ligne2);
		p.setClient(solo.get());
		// System.out.println(panier);
		panier_repo.save(p);
	}


}
