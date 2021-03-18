json.directMessage do
    json.partial! '/api/direct_messages/direct_message', direct_message: @direct_message
end

# json.directMessageUsers do
#     @direct_message_users.each do |direct_message_user|
#         json.set! direct_message_user.user_id do
#             json.partial! '/api/users/user', user: direct_message_user.user
#         end
#     end
# end