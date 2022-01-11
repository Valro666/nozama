package formation.nozama.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import formation.nozama.model.Panier;

public interface PanierRepository extends JpaRepository<Panier, String> {

}
