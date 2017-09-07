select tags.name as tagname 
	from tags inner join itemtags
					  on itemtags.tagid = tags.id
			where itemtags.itemid = 2; 