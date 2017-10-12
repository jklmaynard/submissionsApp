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
        respond_with Journal.create(journal_params)
    end

    def update
        journal = Journal.find(params[:id])

        journal.update(updated_params)
        respond_with journal
    end


  private
    def journal_params
        params.require(:journal).permit(:title, :url)
    end

    def updated_params
        params.require(:journal).permit(:notes, :title, :url, :created_at, :updated_at)
    end

end
