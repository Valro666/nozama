package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Article;

public interface ArticleRepository extends JpaRepository<Article, Integer> {
	List<Article> findByMarqueContaining(String marque);

}
