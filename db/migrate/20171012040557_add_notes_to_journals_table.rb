class AddNotesToJournalsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :journals, :notes, :text, array: true
  end
end
