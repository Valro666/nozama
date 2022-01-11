package model;

import java.util.ArrayList;

import javax.persistence.Entity;

public class Panier {
	
	private ArrayList<Ligne> panier ;
	private String date;
	
	public Panier() {
	}

	public Panier(ArrayList<Ligne> panier, String date) {
		this.panier = panier;
		this.date = date;
	}

	public ArrayList<Ligne> getPanier() {
		return panier;
	}


	public void setPanier(ArrayList<Ligne> panier) {
		this.panier = panier;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}

	public double getPrix(){
		double totalPrice = 0;
		for(Ligne l: panier)
			totalPrice += l.getPrix();
		return totalPrice;
	}

	@Override
	public String toString() {
		return "Panier [panier=" + panier + ", date=" + date + "]";
	}

}
