class CreateHiveUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :hive_users do |t|
        t.integer :hive_id, null: false
        t.integer :user_id, null: false
        t.datetime :last_read_at
        t.timestamps
    end

    add_index :hive_users, :hive_id
    add_index :hive_users, :user_id
  end
end
