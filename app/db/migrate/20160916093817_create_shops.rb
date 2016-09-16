class CreateShops < ActiveRecord::Migration[5.0]
  def change
    create_table :shops do |t|
      t.string :gender
      t.string :description
      t.decimal :price

      t.timestamps
    end
  end
end
