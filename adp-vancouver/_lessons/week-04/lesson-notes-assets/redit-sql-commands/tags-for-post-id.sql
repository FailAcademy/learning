select tags.name as tagname 
	from tags inner join posttags
					  on posttags.tagid = tags.id
			where posttags.postid = 2; 