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
      respond_with Submission.create(submission_params)
    end
  private
    def submission_params
      params.require(:submission).permit(:name, :poems)
    end
end
