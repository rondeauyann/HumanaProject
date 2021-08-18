<?php

include '../bootstrap.php';
include "../views/header.phtml";

?>

<h2><i class="fa fa-cogs" aria-hidden="true"></i> Panneau d'administration</h2>

<a href="article.php">Rédiger un nouvel article</a>



<div>
	<table>
		<thead>Liste des articles</thead>
		<tbody>
			<tr>
				<th>Titre</th>
				<th>Article</th>
				<th>Auteur</th>
			</tr>

			<?php $articles = getArticles(); ?>
			<?php foreach($articles as $article): ?>


			<tr>
				<td><a href="comment.php?id=<?= $article['user_id'] ?>"><?= $article['title'] ?></a></td>
				<td><?= $article['content'] ?></td>
				<td><?= $article['username'] ?></td>
				<td><a href="editPost.php?id=<?= $article['user_id'] ?>"><i class="fa fa-bolt" aria-hidden="true"></i></a> <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>
			</tr>

		<?php endforeach; ?>

		</tbody>
	</table>
</div>