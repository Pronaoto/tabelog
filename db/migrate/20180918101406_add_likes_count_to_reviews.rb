class AddLikesCountToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :likes_count, :integer
  end
end
