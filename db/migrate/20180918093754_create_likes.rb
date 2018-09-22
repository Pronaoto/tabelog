class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.references       :user, index: true, foreign_key: true, null: false
      t.references       :review, index: true,foreign_key: true, null: false
      t.timestamps
    end
  end
end
