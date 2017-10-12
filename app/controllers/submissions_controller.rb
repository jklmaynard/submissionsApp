class SubmissionsController < ApplicationController

      def index
          respond_with Submission.all
      end

      def show
          submission = Submission.find(params[:id])
          poems = submission.poems
          respond_with [submission, poems]
      end

      def create
          submission = Submission.create(submission_params)
          params[:poems].each do |poem|
              submission.poems.push(Poem.find(poem[:id]))
          end
          respond_with submission
      end

      def update
          submission = Submission.find(params[:id])
          submission.poems = [];

          submission.update(updated_params)
          params[:poems].each do |poem|
            # clear out the poems array again, to push an update
              submission.poems.push(Poem.find(poem[:id]))
          end
          respond_with submission
      end

    private
      def submission_params
          params.require(:submission).permit(:name, :journal_id, poems: [])
      end

      def updated_params
          params.require(:submission).permit(:name, :journal_id, :status, poems: [])
      end

end
