# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
User.reset_pk_sequence
Hive.delete_all
Hive.reset_pk_sequence
HiveUser.delete_all
HiveUser.reset_pk_sequence
Message.delete_all
Message.reset_pk_sequence

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

hive1 = Hive.create!(
    name: "welcome",
    description: "Welcome to buzzhive. Join hundreds of channels and communicate freely with other users.",
    is_private: false,
    author_id: user14.id
)
hive2 = Hive.create!(
    name: "general",
    description: "Got something on your mind? Post it here where others can like and respond to your messages.",
    is_private: false,
    ref_link: "https://slack.com/",
    author_id: user14.id
)

channelUser1 = HiveUser.create!(hive_id: hive1.id, user_id: user1.id)
channelUser2 = HiveUser.create!(hive_id: hive1.id, user_id: user2.id)
channelUser3 = HiveUser.create!(hive_id: hive1.id, user_id: user3.id)
channelUser4 = HiveUser.create!(hive_id: hive1.id, user_id: user4.id)
channelUser5 = HiveUser.create!(hive_id: hive1.id, user_id: user5.id)
channelUser6 = HiveUser.create!(hive_id: hive1.id, user_id: user6.id)
channelUser7 = HiveUser.create!(hive_id: hive1.id, user_id: user7.id)
channelUser8 = HiveUser.create!(hive_id: hive1.id, user_id: user8.id)
channelUser9 = HiveUser.create!(hive_id: hive1.id, user_id: user9.id)
channelUser10 = HiveUser.create!(hive_id: hive1.id, user_id: user10.id)
channelUser11 = HiveUser.create!(hive_id: hive1.id, user_id: user11.id)
channelUser12 = HiveUser.create!(hive_id: hive1.id, user_id: user12.id)
channelUser13 = HiveUser.create!(hive_id: hive1.id, user_id: user13.id)
channelUser14 = HiveUser.create!(hive_id: hive1.id, user_id: user14.id)

channelUser1 = HiveUser.create!(hive_id: hive2.id, user_id: user1.id)
channelUser2 = HiveUser.create!(hive_id: hive2.id, user_id: user2.id)
channelUser3 = HiveUser.create!(hive_id: hive2.id, user_id: user3.id)
channelUser4 = HiveUser.create!(hive_id: hive2.id, user_id: user4.id)
channelUser5 = HiveUser.create!(hive_id: hive2.id, user_id: user5.id)
channelUser6 = HiveUser.create!(hive_id: hive2.id, user_id: user6.id)
channelUser7 = HiveUser.create!(hive_id: hive2.id, user_id: user7.id)
channelUser8 = HiveUser.create!(hive_id: hive2.id, user_id: user8.id)
channelUser9 = HiveUser.create!(hive_id: hive2.id, user_id: user9.id)
channelUser10 = HiveUser.create!(hive_id: hive2.id, user_id: user10.id)
channelUser11 = HiveUser.create!(hive_id: hive2.id, user_id: user11.id)
channelUser12 = HiveUser.create!(hive_id: hive2.id, user_id: user12.id)
channelUser13 = HiveUser.create!(hive_id: hive2.id, user_id: user13.id)
channelUser14 = HiveUser.create!(hive_id: hive2.id, user_id: user14.id)

message1 = Message.create!(
    body: "Hello everyone. This is the first test message on Buzzhive.",
    author_id: user14.id,
    msgeable_id: hive2.id,
    msgeable_type: 'Hive'
)

message2 = Message.create!(
    body: "Ahoy there! Excited to be here!",
    author_id: user6.id,
    parent_message_id: message1.id,
    msgeable_id: hive2.id,
    msgeable_type: 'Hive'
)

message3 = Message.create!(
    body: "Glad to have you aboard matey.",
    author_id: user14.id,
    parent_message_id: message2.id,
    msgeable_id: hive2.id,
    msgeable_type: 'Hive'
)

message4 = Message.create!(
    body: "Where can I find the repo for buzzhive?",
    author_id: user7.id,
    msgeable_id: hive2.id,
    msgeable_type: 'Hive'
)

message5 = Message.create!(
    body: "You can find it here, at https://github.com/matteeyao/buzzhive.",
    author_id: user14.id,
    parent_message_id: message4.id,
    msgeable_id: hive2.id,
    msgeable_type: 'Hive'
)