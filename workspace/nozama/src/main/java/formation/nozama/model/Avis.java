package formation.nozama.model;

import org.springframework.data.annotation.Transient;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

@Entity
public class Avis {
	@Id
	private int id;
	private int note;
	private String commentaire;
	private int articleId;
	private int auteurId;
	@Version
	private int version;
	
	public Avis() {
	}

	public Avis(int id, int note, String commentaire, Article article, CompteClient auteur) {
		this.id = id;
		this.note = note;
		this.commentaire = commentaire;
		//this.article = article;
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
	
//	@ManyToOne
//	@JoinColumn(name="ARTICLE_ID")

	
	@Version
	public int getVersion() {
		return version;
	}


	public void setVersion(int version) {
		this.version = version;
	}

	public int getArticleId() {
		return articleId;
	}
	
	public void setArticleId(int articleId) {
		this.articleId = articleId;
	}

	public int getAuteurId() {
		return auteurId;
	}

	public void setAuteurId(int auteurId) {
		this.auteurId = auteurId;
	}
	
	
//	@Override
//	public String toString() {
//		return "Avis [note=" + note + ", commentaire=" + commentaire + ", article=" + article + ", auteur=" + auteur
//				+ "]";
//	}

}
