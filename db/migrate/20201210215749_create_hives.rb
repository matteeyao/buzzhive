class CreateHives < ActiveRecord::Migration[5.2]
  def change
    create_table :hives do |t|
        t.string :name, null: false
        t.text :description, null: false
        t.boolean :private, null: false
        t.integer :author_id, null: false
        t.string :ref_link

        t.timestamps
    end

    add_index :hives, :author_id
  end
end
