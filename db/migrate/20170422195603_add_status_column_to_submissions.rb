class AddStatusColumnToSubmissions < ActiveRecord::Migration[5.0]
  def change
    add_column :submissions, :status, :string, default: 'in progress'
  end
end
