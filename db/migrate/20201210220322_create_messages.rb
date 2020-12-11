class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
        t.string :body, null: false
        t.integer :author_id, null: false
        t.integer :parent_message_id
        t.integer :msgeable_id, null: false
        t.string :msgeable_type, null: false

        t.timestamps
    end

    add_index :messages, :author_id
    add_index :messages, :parent_message_id
    add_index :messages, [:msgeable_type, :msgeable_id]
  end
end
