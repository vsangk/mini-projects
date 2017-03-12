class CreateSecuredResouces < ActiveRecord::Migration[5.0]
  def change
    create_table :secured_resouces do |t|
      t.string :info

      t.timestamps
    end
  end
end
