class User < ApplicationRecord
  def self.from_token_payload(payload)
    self.find(payload["sub"])
  end
end
