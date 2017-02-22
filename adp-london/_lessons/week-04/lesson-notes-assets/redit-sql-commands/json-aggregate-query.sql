select
    weeks.week_id,
    weeks.title,
    json_agg(json_build_object('category_id', categories.category_id, 'category_title', categories.title)) as categories
from
    weeks
    inner join categories on categories.week_id = weeks.week_id
group by
    weeks.week_id
order by
    weeks.title asc;
