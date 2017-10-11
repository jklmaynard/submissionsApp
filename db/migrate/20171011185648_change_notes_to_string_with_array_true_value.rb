class ChangeNotesToStringWithArrayTrueValue < ActiveRecord::Migration[5.0]
  def change
    change_column :submissions, :notes, :string, array: true
  end
end
