class PetsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_pet, only: [:edit, :update, :destroy]

  def new
    @pet = current_user.pets.new
  end

  def create
    @pet = current_user.pets.new(pet_params)
    if @pet.save
      redirect_to profile_path, notice: "Pet added successfully."
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @pet.update(pet_params)
      redirect_to profile_path, notice: "Pet updated successfully."
    else
      render :edit
    end
  end

  def destroy
    @pet.destroy
    redirect_to profile_path, notice: "Pet removed successfully."
  end

  private

  def set_pet
    @pet = current_user.pets.find(params[:id])
  end

  def pet_params
    params.require(:pet).permit(:name, :breed, :age)
  end
end
