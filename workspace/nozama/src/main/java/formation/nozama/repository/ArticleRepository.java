package formation.nozama.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import formation.nozama.model.Article;

public interface ArticleRepository extends JpaRepository<Article, Integer> {
	List<Article> findByNomContaining(String nom);
	List<Article> findByCategorieContaining(String categorie);
	List<Article> findBySousCategorieContaining(String SousCategorie);
	List<Article> findByFabricantContaining(String Fabricant);
	List<Article> findByPrix(int prix);

}
