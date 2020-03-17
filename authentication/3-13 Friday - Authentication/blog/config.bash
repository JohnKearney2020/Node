#this is the first step in creating our tables in our database.

# sequelize model:generate --name author --attributes name:string,bio:string,imageURL:string

# sequelize model:generate --name categories --attributes name:string

# sequelize model:generate --name blogs --attributes title:string,author_id:integer,category_id:integer,body:string,date_pub:date


