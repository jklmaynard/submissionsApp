class RenameSubmissionsPoemsTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :poems_submissions_tables, :poems_submissions
  end
end
