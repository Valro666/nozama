package formation.nozama.model;

import java.util.ArrayList;
import java.util.List;

import formation.nozama.repository.ArticleRepository;

public class AllCate {

	List<Catesous> lc = new ArrayList<Catesous>();

	public AllCate(ArticleRepository repository) {

		List<Article> o = repository.findAll();

		List<String> cate = new ArrayList<String>();
		for (Article art : o) {
//			System.out.println(art.getCategorie());

			if (!cate.contains(art.getCategorie()))
				cate.add(art.getCategorie());
		}

		for (String c : cate) {
			// System.out.println(repository.findByCategorieContaining(c).get);
			List<Article> oo = repository.findByCategorieContaining(c);
			List<String> souscate = new ArrayList<String>();
			for (Article sous : oo) {
				if (!souscate.contains(sous.getSousCategorie()))
					souscate.add(sous.getSousCategorie());
//				System.out.println(sous.getSousCategorie());
			}
//			System.out.println(c);
//			System.out.println(souscate);

			this.lc.add(new Catesous(c, souscate));
		}

		// System.out.println(cate);
	}

	public List<Catesous> getLc() {
		return lc;
	}

	public void setLc(List<Catesous> lc) {
		this.lc = lc;
	}

	@Override
	public String toString() {
		return "AllCate [lc=" + lc + "]";
	}

}
