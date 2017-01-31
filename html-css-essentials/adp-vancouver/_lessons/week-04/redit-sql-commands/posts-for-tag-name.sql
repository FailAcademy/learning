select posts.title, posts.id from posts 
	inner join posttags
			on posts.id = posttags.postid
	inner join tags
	   		on tags.id = posttags.tagid
	where tags.name like 'React';