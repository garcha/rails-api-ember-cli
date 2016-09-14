class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :price
      t.references :author, foreign_key: true
      t.references :publisher, foreign_key: true

      t.timestamps
    end
  end
end
