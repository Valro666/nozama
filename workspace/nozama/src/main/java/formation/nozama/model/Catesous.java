package formation.nozama.model;

import java.util.ArrayList;
import java.util.List;

public class Catesous {

	String categorie = "";
	List<String> sous = new ArrayList<String>();

	public Catesous(String categorie, List<String> sous) {
		this.categorie = categorie;
		this.sous = sous;

	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public List<String> getSous() {
		return sous;
	}

	public void setSous(List<String> sous) {
		this.sous = sous;
	}

	@Override
	public String toString() {
		return "Catesous [categorie=" + categorie + ", sous=" + sous + "]";
	}

}
