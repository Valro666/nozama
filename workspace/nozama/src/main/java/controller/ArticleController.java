package controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import model.Article;
import repository.ArticleRepository;

@Controller
@RequestMapping("/articles")
public class ArticleController {

	@Autowired
	private ArticleRepository repo;

	// @GetMapping("/getAll")
	// public String getAll(Model model) {
	// List<Article> info = repo.findAll();
	// model.addAttribute("toto", info);
	//
	// return "article/info";
	//
	// }
	
	// @GetMapping("/getAll")
	// public String getAll(Model model) {

	// model.addAttribute("liste", repo.findAll());
	//
	// return "article/list";
	//
	// }

	@GetMapping("/getAll")
	 public ModelAndView getAll(Model model) {

	 ModelAndView modelAndView = new ModelAndView("/article/list", "liste",repo.findAll());
	 
	 return modelAndView;
	 }

	@PostMapping("/getAll")
	public ModelAndView getAllByMarque(@ModelAttribute(name = "marque") String marque) {
		ModelAndView modelAndView = new ModelAndView("/article/list", "liste", repo.findByMarqueContaining(marque));
		return modelAndView;
	}

	@RequestMapping("/getArticle")
	public String getOne(@RequestParam(value = "id") int id, Model model) {
		Article article = this.repo.findById(id).get();

		model.addAttribute("liste", new ArrayList<>(Arrays.asList(article)));
		return "article/list";
	}

	@RequestMapping("/create")
	public ModelAndView create(@RequestParam(value = "id") int id, @RequestParam(value = "marque") String marque,
			@RequestParam(value = "prix") double prix) {
		Article a = new Article(id, marque, prix);
		this.repo.save(a);
		return new ModelAndView("redirect:/articles/getAll", "liste", repo.findAll());
	}

	@RequestMapping("/update")
	public ModelAndView update(@RequestParam(value = "id") int id, @RequestParam(value = "marque") String marque,
			@RequestParam(value = "prix") double prix) {
		if (this.repo.existsById(id)) {
			Article a = new Article(id, marque, prix);
			this.repo.save(a);
		}
		return new ModelAndView("redirect:/articles/getAll", "liste", repo.findAll());
	}

	@RequestMapping("/delete")
	public ModelAndView update(@RequestParam(value = "id") int id) {
		if (this.repo.existsById(id)) {
			Article a = this.repo.findById(id).get();
			this.repo.delete(a);
		}
		return new ModelAndView("redirect:/articles/getAll", "liste", repo.findAll());
	}

	@GetMapping("/createForm")
	public ModelAndView create(Model model) {
		return new ModelAndView("/article/create", "article", new Article());
	}

	@PostMapping("/createForm")
	public ModelAndView create(@ModelAttribute(name = "article") Article article) {
		this.repo.save(article);
		return new ModelAndView("redirect:/articles/getAll", "liste", repo.findAll());
	}

}
