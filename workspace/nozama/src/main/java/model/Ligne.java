package model;

public class Ligne {
	private Article article;
	private int quantity;
	
	public Ligne() {
	}

	public Ligne(Article article, int quantity) {
		this.article = article;
		this.quantity = quantity;
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

	public double getPrix(){
		return article.getPrix()*quantity;
	}
	

	@Override
	public String toString() {
		return "Ligne [article=" + article + ", quantity=" + quantity + "]";
	}
}
