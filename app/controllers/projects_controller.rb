class ProjectsController < ApplicationController
  expose :project
  expose :projects do
    Project.all
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def project_params
    params.require(:project).permit(
      :title,
      :subtitle,
      :details,
      :body
    )
  end
end
