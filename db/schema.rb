# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_18_162023) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "direct_message_users", force: :cascade do |t|
    t.bigint "direct_message_id"
    t.bigint "user_id"
    t.index ["direct_message_id"], name: "index_direct_message_users_on_direct_message_id"
    t.index ["user_id"], name: "index_direct_message_users_on_user_id"
  end

  create_table "direct_messages", force: :cascade do |t|
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hive_users", force: :cascade do |t|
    t.integer "hive_id", null: false
    t.integer "user_id", null: false
    t.datetime "last_read_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hive_id"], name: "index_hive_users_on_hive_id"
    t.index ["user_id"], name: "index_hive_users_on_user_id"
  end

  create_table "hives", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.boolean "is_private", null: false
    t.integer "author_id", null: false
    t.string "ref_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_hives_on_author_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "parent_message_id"
    t.integer "msgeable_id", null: false
    t.string "msgeable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_messages_on_author_id"
    t.index ["msgeable_type", "msgeable_id"], name: "index_messages_on_msgeable_type_and_msgeable_id"
    t.index ["parent_message_id"], name: "index_messages_on_parent_message_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "direct_message_users", "direct_messages"
  add_foreign_key "direct_message_users", "users"
end
