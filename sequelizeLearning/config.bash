# sequelize model:generate --name user --attributes firstName:string,lastName:string,email:string

#these create our player and team tables
#need to be followed by 'sequelize db:migrate' in the terminal
sequelize model:generate --name team --attributes name:string,location:string
sequelize model:generate --name player --attributes firstName:string,lastName:string,age:integer