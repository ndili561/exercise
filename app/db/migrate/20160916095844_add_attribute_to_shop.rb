class AddAttributeToShop < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :img, :string
  end
end
