package formation.nozama.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Version;

@Entity
public class Panier {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	int id;
	@ElementCollection
	List<Ligne> ligne;
	java.util.Date date;
	// @JoinColumn(name = "login", insertable = false, updatable = false)
	@OneToOne
	CompteClient client;
	// @Column(name = "login")
	// private String login;
	@Version
	int version;

	// init branche
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public Panier() {
		super();
		ligne = new ArrayList<Ligne>();
	}
	/*
	 * public Panier(ArrayList<Ligne> ligne, Date date, CompteClient client) {
	 * super(); this.ligne = ligne; this.date = date; this.client = client; }
	 */

	public List<Ligne> getLigne() {
		return ligne;
	}

	public void setLigne(List<Ligne> ligne) {
		this.ligne = ligne;
	}

	public java.util.Date getDate() {
		return date;
	}

	public void setDate(java.util.Date date2) {
		this.date = date2;
	}

	public CompteClient getClient() {
		return client;
	}

	public void setClient(CompteClient client) {
		this.client = client;
		// this.login = client.getLogin();
	}

	@Override
	public String toString() {
		return "Panier [id=" + id + ", ligne=" + ligne + ", date=" + date + ", client=" + client + ", version="
				+ version + "]";
	}

	/*
	 * public String getLogin() { return login; }
	 * 
	 * public void setLogin(String getLogin) { this.login = getLogin; }
	 */
	public void add(Ligne ligne2) {
		ligne.add(ligne2);
	}
}
