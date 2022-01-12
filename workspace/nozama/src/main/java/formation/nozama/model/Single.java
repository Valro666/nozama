package formation.nozama.model;

import java.util.Date;

public class Single {
	private Single() {
	}

	/** Instance unique pré-initialisée */
	private static Single INSTANCE = new Single();

	/** Point d'accès pour l'instance unique du singleton */
	public static Single getInstance() {
		return INSTANCE;
	}

	public Date getDate() {
		final java.sql.Date dateSQL = new java.sql.Date(new Date().getTime()) ;
		return dateSQL;
	}
}
