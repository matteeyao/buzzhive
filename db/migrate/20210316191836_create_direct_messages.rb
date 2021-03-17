class CreateDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
        t.integer :author_id, null: false

        t.timestamps
    end
  end
end
