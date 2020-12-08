# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create!(username: "Anonymous Fox", fname: "Guest", lname: "User", email: "anonymousfox@buzzhive.io", password: "demopw")
user2 = User.create!(username: "Anonymous Bison", fname: "Guest", lname: "User", email: "anonymousbison@buzzhive.io", password: "demopw")
user3 = User.create!(username: "Anonymous Hedgehog", fname: "Guest", lname: "User", email: "anonymoushedgehog@buzzhive.io", password: "demopw")
user4 = User.create!(username: "Anonymous Orangutan", fname: "Guest", lname: "User", email: "anonymousorangutan@buzzhive.io", password: "demopw")
user5 = User.create!(username: "Anonymous Lynx", fname: "Guest", lname: "User", email: "anonymouslynx@buzzhive.io", password: "demopw")
user6 = User.create!(username: "Anonymous Hare", fname: "Guest", lname: "User", email: "anonymoushare@buzzhive.io", password: "demopw")
user7 = User.create!(username: "Anonymous Turtle", fname: "Guest", lname: "User", email: "anonymousturtle@buzzhive.io", password: "demopw")
user8 = User.create!(username: "Anonymous Parrot", fname: "Guest", lname: "User", email: "anonymousparrot@buzzhive.io", password: "demopw")
user9 = User.create!(username: "Anonymous Dingo", fname: "Guest", lname: "User", email: "anonymousdingo@buzzhive.io", password: "demopw")
user10 = User.create!(username: "Anonymous Moose", fname: "Guest", lname: "User", email: "anonymousmoose@buzzhive.io", password: "demopw")
user11 = User.create!(username: "Anonymous Pony", fname: "Guest", lname: "User", email: "anonymouspony@buzzhive.io", password: "demopw")
user12 = User.create!(username: "MishMosh", fname: "Michelle", lname: "Kim", email: "mishmosh@aa.io", password: "password")
user13 = User.create!(username: "WakaFlaka", fname: "Sam", lname: "Walker", email: "wakaflaka@aa.io", password: "password")
user14 = User.create!(username: "Matty", fname: "Matt", lname: "Yao", email: "matty@buzzhive.com", password: "password")
