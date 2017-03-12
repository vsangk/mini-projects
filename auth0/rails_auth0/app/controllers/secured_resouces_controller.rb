class SecuredResoucesController < ApplicationController
  before_action :set_secured_resouce, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user

  # GET /secured_resouces
  # GET /secured_resouces.json
  def index
    @secured_resouces = SecuredResouce.all
  end

  # GET /secured_resouces/1
  # GET /secured_resouces/1.json
  def show
  end

  # GET /secured_resouces/new
  def new
    @secured_resouce = SecuredResouce.new
  end

  # GET /secured_resouces/1/edit
  def edit
  end

  # POST /secured_resouces
  # POST /secured_resouces.json
  def create
    @secured_resouce = SecuredResouce.new(secured_resouce_params)

    respond_to do |format|
      if @secured_resouce.save
        format.html { redirect_to @secured_resouce, notice: 'Secured resouce was successfully created.' }
        format.json { render :show, status: :created, location: @secured_resouce }
      else
        format.html { render :new }
        format.json { render json: @secured_resouce.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /secured_resouces/1
  # PATCH/PUT /secured_resouces/1.json
  def update
    respond_to do |format|
      if @secured_resouce.update(secured_resouce_params)
        format.html { redirect_to @secured_resouce, notice: 'Secured resouce was successfully updated.' }
        format.json { render :show, status: :ok, location: @secured_resouce }
      else
        format.html { render :edit }
        format.json { render json: @secured_resouce.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /secured_resouces/1
  # DELETE /secured_resouces/1.json
  def destroy
    @secured_resouce.destroy
    respond_to do |format|
      format.html { redirect_to secured_resouces_url, notice: 'Secured resouce was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_secured_resouce
      @secured_resouce = SecuredResouce.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def secured_resouce_params
      params.fetch(:secured_resouce, {})
    end
end
