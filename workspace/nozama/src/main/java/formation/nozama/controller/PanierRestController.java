package formation.nozama.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import formation.nozama.model.Panier;
import formation.nozama.repository.PanierRepository;

@Transactional
@RestController
@RequestMapping("/panier")
public class PanierRestController {

	@Autowired
	private PanierRepository repository;

	@CrossOrigin
	@GetMapping("/panier")
	public List<Panier> list() {
		System.out.println("coucou");
		return this.repository.findAll();
	}

}
