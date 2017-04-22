class SubmissionsController < ApplicationController

    def index
      respond_with Submission.all
    end

    def show
      respond_with Submission.find(params[:id])
    end

    def create
      respond_with Submission.create(submission_params)
    end
  private
    def submission_params
      params.require(:submission).permit(:name)
    end
end
