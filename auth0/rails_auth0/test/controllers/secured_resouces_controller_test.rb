require 'test_helper'

class SecuredResoucesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @secured_resouce = secured_resouces(:one)
  end

  test "should get index" do
    get secured_resouces_url
    assert_response :success
  end

  test "should get new" do
    get new_secured_resouce_url
    assert_response :success
  end

  test "should create secured_resouce" do
    assert_difference('SecuredResouce.count') do
      post secured_resouces_url, params: { secured_resouce: {  } }
    end

    assert_redirected_to secured_resouce_url(SecuredResouce.last)
  end

  test "should show secured_resouce" do
    get secured_resouce_url(@secured_resouce)
    assert_response :success
  end

  test "should get edit" do
    get edit_secured_resouce_url(@secured_resouce)
    assert_response :success
  end

  test "should update secured_resouce" do
    patch secured_resouce_url(@secured_resouce), params: { secured_resouce: {  } }
    assert_redirected_to secured_resouce_url(@secured_resouce)
  end

  test "should destroy secured_resouce" do
    assert_difference('SecuredResouce.count', -1) do
      delete secured_resouce_url(@secured_resouce)
    end

    assert_redirected_to secured_resouces_url
  end
end
