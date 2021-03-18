class CreateDirectMessageUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_message_users do |t|
      t.references :direct_message, foreign_key: true
      t.references :user, foreign_key: true
    end
  end
end
