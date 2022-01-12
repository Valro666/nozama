package formation.nozama.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.OneToOne;

@Embeddable
public class Ligne implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -3943152008394727331L;
	@OneToOne
	Article article;
	int quantity;

	public Ligne() {
		super();
	}

	public Ligne(Article article, int quantity) {
		super();
		this.article = article;
		this.quantity = quantity;
	}

	public String toString() {
		return "Ligne [article=" + article + ", quantity=" + quantity + "]";
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double Total() {
		return article.getPrix() * quantity;
	}
}
