package formation.nozama.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

@Entity
public class Avis {
	
	private int id;
	private int note;
	private String commentaire;
	private Article article;
	//private CompteClient auteur;
	@Version
	private int version;
	
	public Avis() {
	}

	public Avis(int id, int note, String commentaire, Article article) {
		this.id = id;
		this.note = note;
		this.commentaire = commentaire;
		this.article = article;
		//this.auteur = auteur;
	}

	@Id
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public int getNote() {
		return note;
	}

	public void setNote(int note) {
		this.note = note;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}
	@ManyToOne
	@JoinColumn(name="ARTICLE_ID")
	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	@Version
	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

//	public CompteClient getAuteur() {
//		return auteur;
//	}
//
//	public void setAuteur(CompteClient auteur) {
//		this.auteur = auteur;
//	}
//	@Override
//	public String toString() {
//		return "Avis [note=" + note + ", commentaire=" + commentaire + ", article=" + article + ", auteur=" + auteur
//				+ "]";
//	}
}
