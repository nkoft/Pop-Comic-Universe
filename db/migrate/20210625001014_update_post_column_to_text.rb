class UpdatePostColumnToText < ActiveRecord::Migration[6.1]
  def change
    change_column :reviews, :post, :text
  end
end
