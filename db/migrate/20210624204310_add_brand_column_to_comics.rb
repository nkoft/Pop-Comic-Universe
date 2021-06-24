class AddBrandColumnToComics < ActiveRecord::Migration[6.1]
  def change
    add_column :comics, :brand, :string
    add_reference :comics, :user, index: true
  end
end
