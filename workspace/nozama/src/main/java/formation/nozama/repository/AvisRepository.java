package formation.nozama.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import formation.nozama.model.Avis;

public interface AvisRepository extends JpaRepository<Avis, Integer> {
	List<Avis> findByNote(int prix);
	List<Avis> findByArticleId(int articleId);
	

}
