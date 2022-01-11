package formation.nozama.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import formation.nozama.model.CompteClient;

public interface CompteClientRepository extends JpaRepository<CompteClient, String> {

	CompteClient findByMailAndPass(String mail, String pass);

	CompteClient findByLoginAndPass(String login, String pass);
}
