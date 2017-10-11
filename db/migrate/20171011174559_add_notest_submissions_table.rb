class AddNotestSubmissionsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :submissions, :notes, :string
  end
end
