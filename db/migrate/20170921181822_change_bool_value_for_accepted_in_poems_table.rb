class ChangeBoolValueForAcceptedInPoemsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :poems, :accepted
    add_column :poems, :accepted, :boolean, default: false
  end
end
