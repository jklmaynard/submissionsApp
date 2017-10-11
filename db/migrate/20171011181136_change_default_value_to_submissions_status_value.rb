class ChangeDefaultValueToSubmissionsStatusValue < ActiveRecord::Migration[5.0]
  def change
    remove_column :submissions, :status
    add_column :submissions, :status, :string, default: "not submitted"
  end
end
