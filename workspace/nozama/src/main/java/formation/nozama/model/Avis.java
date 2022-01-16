package formation.nozama.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Version;

@Entity
public class Avis {
	
	private int id;
	private int note;
	private String titre;
	private String commentaire;
	private int articleId;
	private String auteurId;
	@Version
	private int version;
	
	public Avis() {
	}

	public Avis(int id, int note, String titre, String commentaire, int articleId, String auteurId) {
		this.id = id;
		this.note = note;
		this.titre = titre;
		this.commentaire = commentaire;
		this.articleId = articleId;
		this.auteurId = auteurId;
	}



	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
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
		
	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

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

	public String getAuteurId() {
		return auteurId;
	}

	public void setAuteurId(String auteurId) {
		this.auteurId = auteurId;
	}
	
	
//	@Override
//	public String toString() {
//		return "Avis [note=" + note + ", commentaire=" + commentaire + ", article=" + article + ", auteur=" + auteur
//				+ "]";
//	}

}
