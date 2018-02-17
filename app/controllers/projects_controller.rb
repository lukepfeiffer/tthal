class ProjectsController < ApplicationController
  expose :project
  expose :projects do
    Project.all
  end
end
