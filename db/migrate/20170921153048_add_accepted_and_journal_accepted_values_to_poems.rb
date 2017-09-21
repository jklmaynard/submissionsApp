class AddAcceptedAndJournalAcceptedValuesToPoems < ActiveRecord::Migration[5.0]
  def change
    add_column :poems, :accepted, :bool, default: false
    add_column :poems, :journal_accepted, :string
  end
end
