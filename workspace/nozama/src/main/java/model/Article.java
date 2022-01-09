package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Version;

@Entity
public class Article {
	@Id
	private int id;
	private String marque;
	private double prix;
	@Version
	private int version;

	public Article() {
	}

	public Article(int id, String marque, double prix) {
		this.id = id;
		this.marque = marque;
		this.prix = prix;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMarque() {
		return marque;
	}

	public void setMarque(String marque) {
		this.marque = marque;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	@Override
	public String toString() {
		return "Article [id=" + id + ", marque=" + marque + ", prix=" + prix + ", version=" + version + "]";
	}

}
