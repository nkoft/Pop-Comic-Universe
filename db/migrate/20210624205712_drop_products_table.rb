class DropProductsTable < ActiveRecord::Migration[6.1]
  def up
    drop_table :brands
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
