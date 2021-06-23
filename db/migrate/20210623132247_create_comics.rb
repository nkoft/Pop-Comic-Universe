class CreateComics < ActiveRecord::Migration[6.1]
  def change
    create_table :comics do |t|
      t.string :title
      t.string :date
      t.string :writer
      t.string :artist
      t.text :synopsis

      t.timestamps
    end
  end
end
