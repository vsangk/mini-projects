require 'aws-sdk'

# S3 = Aws::S3::Client.new(
#   region: ENV['AWS_REGION'],
#   access_key_id: ENV['AWS_ACCESS_KEY_ID'],
#   secret_access_key: ENV['AWS_SECRET_ACCESS_KEY']
# )

# S3_BUCKET = S3.create_bucket(
#   acl: "private", # accepts private, public-read, public-read-write, authenticated-read
#   bucket: ENV['S3_BUCKET_NAME'], # required
#   create_bucket_configuration: {
#     location_constraint: "us-west-1"
#   }
# )

S3 = Aws::S3::Resource.new(region: ENV['AWS_REGION'])
S3_BUCKET = S3.bucket(ENV['S3_BUCKET_NAME'])
