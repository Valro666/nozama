package formation.nozama.model;

import java.util.List;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Version;

@Entity
public class Article {
	
	private int id;
	private String nom;
	private double prix;
	private String description;
	private String categorie;
	private String sousCategorie;
	private String fabricant;
	//private List<Avis> avis;
	@Version
	private int version;
	
	public Article() {
	}
/*
	public Article(int id, String nom, double prix, String description, String categorie, String sousCategorie,
			String fabricant, List<Avis> avis) {
		this.id = id;
		this.nom = nom;
		this.prix = prix;
		this.description = description;
		this.categorie = categorie;
		this.sousCategorie = sousCategorie;
		this.fabricant = fabricant;
		this.avis = avis;
	}
*/

	@Id
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	@Version
	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getSousCategorie() {
		return sousCategorie;
	}

	public void setSousCategorie(String sousCategorie) {
		this.sousCategorie = sousCategorie;
	}

	public String getFabricant() {
		return fabricant;
	}

	public void setFabricant(String fabricant) {
		this.fabricant = fabricant;
	}

	//@OneToMany//(mappedBy="article",fetch=FetchType.EAGER)
//	public List<Avis> getAvis() {
//		return avis;
//	}
//
//	public void setAvis(List<Avis> avis) {
//		this.avis = avis;
//	}
	
	
//	public double noteAverage() {
//		double totalNotes = 0;
//		int notesAmount = 0;
//		for(Avis a: avis){
//			totalNotes += a.getNote(); 
//			notesAmount++;
//		}
//		return totalNotes/notesAmount;
//	}
	
	@Override
	public String toString() {
		return "Article [id=" + id + ", marque=" + nom + ", prix=" + prix + ", version=" + version + "]";
	}

}
