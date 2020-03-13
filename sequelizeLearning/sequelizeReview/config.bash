# sequelize model:generate --name user --attributes firstName:string,lastName:string,email:string

# Note, this does not make a table. It sets things up for a table to be made. It will create js files in 
# the models folder that correspond to each of these tables, and js files in the migrations folder that
# also correspond to these tables
sequelize model:generate --name team --attributes name:string,location:string
sequelize model:generate --name player --attributes firstName:string,lastName:string,age:integer

#these tables are actually created after the bash code above is run and we use 'sequelize db:migrate' in the console


