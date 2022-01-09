<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <title>Liste des personnes</title>
</head>

<body>
  <div class="container">
    <br>
    <button onclick="window.location.href = 'http://localhost:8080/projetMvcArticle/articles/getAll';" class="btn btn-dark">Retour à la liste d'articles</button>
    <br>
    <br>
    <form:form action="" method="post" modelAttribute="marque" class="form-inline">
      <input type="text" name="marque" class="form-control mb-2 mr-sm-2" placeholder="Marque" />
      <button type="submit" class="btn btn-dark mb-2">Valider</button>
    </form:form>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Marque</th>
          <th>Prix</th>
        </tr>
      </thead>
      <c:forEach items="${liste}" var="article">
        <tr>
          <td><a href="/projetMvcArticle/articles/getArticle?id=${article.id}">${article.id}</a></td>
          <td>${article.marque}</td>
          <td>${article.prix}€</td>
        </tr>
      </c:forEach>
    </table>
  </div>
</body>

</html>