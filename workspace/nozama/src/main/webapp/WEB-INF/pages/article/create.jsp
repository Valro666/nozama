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
    <h1>Créer un nouvel article</h1>
    <form:form action="" method="post" modelAttribute="article">
      <div class="form-row">
        <div class="form-group col-md-1">
          <label for="articleId">ID</label>
          <input type="number" class="form-control" id="articleId" name="id">
        </div>
        <div class="form-group col-md-6">
          <label for="articleMarque">Marque</label>
          <input type="text" class="form-control" id="articleMarque" name="marque">
        </div>
        <div class="form-group col-md-1">
          <label for="articlePrix">Prix</label>
          <input type="number" class="form-control" id="articlePrix" name="prix">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Créer</button>
    </form:form>
  </div>
</body>

</html>