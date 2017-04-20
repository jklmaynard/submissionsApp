class CreateSubmissions < ActiveRecord::Migration[5.0]
  def change
    create_table :submissions do |t|
      t.string :name
      t.integer :journal_id

      t.timestamps
    end
  end
end
