class JournalsController < ApplicationController

    def index
      respond_with Journal.all
    end

    def show
      journal = Journal.find(params[:id])
      submissions = Submission.where(journal_id: journal.id)
      respond_with [journal, submissions]
    end

    def create
      respond_with Journal.create(journal_paraams)
    end
  private
    def journal_params
      params.require(:journal).permit(:title, :url)
    end
end
