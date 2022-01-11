package formation.nozama.model;

import java.sql.Date;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

@Entity
public class Panier {
	@Id
	int id;

	ArrayList<Ligne> ligne;
	Date date;
	@ManyToOne
	CompteClient client;
	@Version
	int version;

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

	// @OneToMany
	public ArrayList<Ligne> getLigne() {
		return ligne;
	}

	public void setLigne(ArrayList<Ligne> ligne) {
		this.ligne = ligne;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	/*
	 * @OneToOne public CompteClient getClient() { return client; }
	 * 
	 * public void setClient(CompteClient client) { this.client = client; }
	 */
}
