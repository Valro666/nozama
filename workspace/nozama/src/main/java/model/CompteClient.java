package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Version;

@Entity
public class CompteClient {
	private String login;
	private String mail;
	private String pass;
	private String nom;
	private String prenom;
	private Panier panier;
	private int version;

	@Id
	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	@Version
	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}
	
	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public CompteClient()
	{
		
	}

	public CompteClient(String login,String mail, String pass, String nom, String prenom) {
		super();
		this.login = login;
		this.mail = mail;
		this.pass = pass;
		this.nom = nom;
		this.prenom = prenom;
		this.panier = new Panier();
	}
	public CompteClient(String login,String mail, String pass, String nom, String prenom, Panier panier) {
		super();
		this.login = login;
		this.mail = mail;
		this.pass = pass;
		this.nom = nom;
		this.prenom = prenom;
		this.panier = panier;
	}

	@Override
	public String toString() {
		return "Personne [login=" + login + ", mail=" + mail + ", pass=" + pass + ", nom=" + nom + ", prenom=" + prenom
				+ ", version=" + version + "]";
	}



}
