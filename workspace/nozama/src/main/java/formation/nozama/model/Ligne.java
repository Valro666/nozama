package formation.nozama.model;

import javax.persistence.Embeddable;

@Embeddable
public class Ligne {
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

	public double getTotal() {
		return article.getPrix() * quantity;
	}
}
