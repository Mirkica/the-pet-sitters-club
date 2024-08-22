class CreatePets < ActiveRecord::Migration[7.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.integer :age
      t.string :bio
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
