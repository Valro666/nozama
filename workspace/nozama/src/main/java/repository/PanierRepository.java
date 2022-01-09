package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.CompteClient;

public interface PanierRepository extends JpaRepository<CompteClient, String> {

}
