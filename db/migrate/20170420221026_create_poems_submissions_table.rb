class CreatePoemsSubmissionsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :poems_submissions_tables do |t|
      t.integer :poem_id
      t.integer :submission_id
    end
  end
end
